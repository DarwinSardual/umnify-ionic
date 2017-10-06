import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {News} from "../../../app/model/news";
import {PostDataService} from "../../../app/providers/postdataservice";
import * as LruCache from "lru-cache";
import {FeedAction} from "../feedaction";
import {ServiceAddress} from "../../../app/constants/serviceaddress";
import {AuthenticationKeys} from "../../../app/constants/authenticationkeys";

@Component({
  selector: 'page-news-feed-guest',
  templateUrl: 'news-feed-guest.html'
})

export class NewsFeedGuestPage{

  public static readonly SERVICE_NAME: string = "fetch_news_json.php";
  public static readonly BASE_URL: string = ServiceAddress.DOMAIN +
    ServiceAddress.FOLDER + ServiceAddress.NEWS_FOLDER;
  public static readonly IMAGE_FOLDER = ServiceAddress.DOMAIN +
    ServiceAddress.FOLDER + ServiceAddress.UPLOAD_IMAGE_FOLDER +
    ServiceAddress.NEWS_FOLDER;

  private cache: LruCache<any>;
  private cacheIndex: string[];
  private fetchDataBody: any;
  private selected: string;

  constructor(public navCtrl: NavController, protected postDataService: PostDataService) {

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

  public fetchData(action: FeedAction){

    let response: any;
    let url: string = NewsFeedGuestPage.BASE_URL + "/" + NewsFeedGuestPage.SERVICE_NAME;


    if(action == FeedAction.REACH_BOTTOM){

      this.fetchDataBody.limit = "3";
      this.fetchDataBody.offset = this.cacheIndex.length;

    }else if(action == FeedAction.REFRESH){

      this.cache.reset();
      this.cacheIndex = [];

      this.fetchDataBody.offset = this.cacheIndex.length;
      this.fetchDataBody.limit = "5";

    }

    response = this.postDataService.postData(url, this.fetchDataBody);
    this.postProcessFetchData(response);
  }

  private createNews(json: any): News{

    let news: News = new News(json.id, json.content, json.image, json.author,
      json.created_date, json.published_date, json.signature, json.firstname, json.lastname, json.author_image);

    return news;
  }

  get imageFolder(): string{
    return NewsFeedGuestPage.IMAGE_FOLDER;
  }

  actionSelected(){
    console.log("Selected", this.selected);
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

      let news:News = this.createNews(item);
      let key: string = news.id + "";

      this.cache.set(key, news);
      this.cacheIndex.push(key);
    }
  }

  deleteFeedEntry(key: string){
    console.log("key", key);
  }
}
