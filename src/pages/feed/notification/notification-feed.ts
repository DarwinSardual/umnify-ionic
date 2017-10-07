import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {PostDataService} from "../../../app/providers/postdataservice";
import {ServiceAddress} from "../../../app/constants/serviceaddress";
import {Notification} from "../../../app/model/notification";
import * as LruCache from "lru-cache";
import {FeedAction} from "../feedaction";
import {AuthenticationKeys} from "../../../app/constants/authenticationkeys";
import {AuthenticationService} from "../../../app/providers/authenticationservice";
import {BlogFactory} from "../../../app/factory/blog-factory";
import {NewsFactory} from "../../../app/factory/news-factory";

@IonicPage()
@Component({
  selector: 'page-notification-feed',
  templateUrl: 'notification-feed.html'
})
export class NotificationFeedPage {

  public static readonly SERVICE_NAME: string = "fetch_notification_json.php";
  public static readonly BASE_URL: string = ServiceAddress.DOMAIN +
    ServiceAddress.FOLDER + ServiceAddress.NOTIFICATION_FOLDER;

  private cache: LruCache<any>;
  private cacheIndex: string[];
  private fetchDataBody: any;

  constructor(public navCtrl: NavController, private postDataService: PostDataService, private auth: AuthenticationService) {

    this.cache = new LruCache();
    this.cacheIndex = [];

    this.fetchDataBody = AuthenticationKeys.getAuthentication();
    this.fetchDataBody.id = "-1";
    this.fetchDataBody.order = "desc";

    this.fetchData(FeedAction.REFRESH);

  }

  public doRefresh(refresher){

    setTimeout(()=>{

      this.fetchData(FeedAction.REFRESH);

      refresher.complete();
    }, 2000);
  }


  public doInfinite(infiniteScroll){
    setTimeout(()=>{

      this.fetchData(FeedAction.REACH_BOTTOM);

      infiniteScroll.complete();
    }, 500);
  }

  public fetchData(action: FeedAction) {

    let response: any;
    let url: string = NotificationFeedPage.BASE_URL + "/" + NotificationFeedPage.SERVICE_NAME;


    if (action == FeedAction.REACH_BOTTOM) {

      this.fetchDataBody.limit = "3";
      this.fetchDataBody.offset = this.cacheIndex.length;


    } else if (action == FeedAction.REFRESH) {

      this.cache.reset();
      this.cacheIndex = [];

      this.fetchDataBody.offset = this.cacheIndex.length;
      this.fetchDataBody.limit = "8";

    }

    response = this.postDataService.postData(url, this.fetchDataBody);
    this.postProcessFetchData(response);
  }

  private createNotification(json: any): Notification{

    let notification: Notification = new Notification(json.notification_id, json.id, json.content, json.author,
      json.published_date, json.type, json.firstname, json.lastname, json.author_image);

    return notification;
  }

  viewNotification(key: string){

    let notification: Notification = this.cache.get(key);
    let userType = this.auth.user.type;
    let refId: number = notification.refId;

    if(notification.type === 'blog'){

      this.navCtrl.push(BlogFactory.getPageFromUserType(userType), {key: refId});
    }else if(notification.type === 'news'){

      this.navCtrl.push(NewsFactory.getPageFromUserType(userType), {key: refId});
    }
  }

  /* FEED MANAGER METHODS */

  public postProcessFetchData(response: any){

    response.subscribe((res) => {
      let data: any = res['data'];
      this.addFeedEntry(data);
    });

  }

  public addFeedEntry(data: any){

    for(let item of data){

      let notification: Notification = this.createNotification(item);
      let key: string = notification.id + "";

      this.cache.set(key, notification);
      this.cacheIndex.push(key);
    }
  }
}
