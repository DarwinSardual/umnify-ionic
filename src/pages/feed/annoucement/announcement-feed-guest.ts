import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import * as LruCache from "lru-cache";
import {ServiceAddress} from "../../../app/constants/serviceaddress";
import {PostDataService} from "../../../app/providers/postdataservice";
import {FeedAction} from "../feedaction";
import {Announcement} from "../../../app/model/announcement";
import {AuthenticationKeys} from "../../../app/constants/authenticationkeys";

@IonicPage()
@Component({
  selector: 'page-announcement-feed-guest',
  templateUrl: 'announcement-feed-guest.html'
})
export class AnnouncementFeedGuestPage {


  public static readonly SERVICE_NAME: string = "fetch_announcement_json.php";
  public static readonly BASE_URL: string = ServiceAddress.DOMAIN +
    ServiceAddress.FOLDER + ServiceAddress.ANNOUNCEMENT_FOLDER;

  public static readonly IMAGE_FOLDER = ServiceAddress.DOMAIN +
    ServiceAddress.FOLDER + ServiceAddress.UPLOAD_IMAGE_FOLDER +
    ServiceAddress.ANNOUNCEMENT_FOLDER;

  private cache: LruCache<any>;
  private cacheIndex: string[];
  private fetchDataBody: any;

  constructor(public navCtrl: NavController, protected postDataService: PostDataService) {
    this.cache = new LruCache();
    this.cacheIndex = [];

    this.fetchDataBody = AuthenticationKeys.getAuthentication();
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
    let url: string = AnnouncementFeedGuestPage.BASE_URL + "/" + AnnouncementFeedGuestPage.SERVICE_NAME;


    if (action == FeedAction.REACH_BOTTOM) {

      this.fetchDataBody.limit = "3";
      this.fetchDataBody.offset = this.cacheIndex.length;

    } else if (action == FeedAction.REFRESH) {

      this.cache.reset();
      this.cacheIndex = [];

      this.fetchDataBody.offset = this.cacheIndex.length;
      this.fetchDataBody.limit = "5";

    }

    response = this.postDataService.postData(url, this.fetchDataBody);
    this.postProcessFetchData(response);
  }

  private createAnnouncement(json: any): Announcement{

    let announcement: Announcement = new Announcement(json.id, json.title, json.content, json.image, json.author,
      json.created_date, json.published_date, json.signature, json.firstname, json.lastname, json.author_image);

    return announcement;
  }

  get imageFolder(): string{
    return AnnouncementFeedGuestPage.IMAGE_FOLDER;
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

      let announcement:Announcement = this.createAnnouncement(item);
      let key: string = announcement.id + "";

      this.cache.set(key, announcement);
      this.cacheIndex.push(key);
    }
  }
}
