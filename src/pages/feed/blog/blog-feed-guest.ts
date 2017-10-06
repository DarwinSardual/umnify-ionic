import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {ServiceAddress} from "../../../app/constants/serviceaddress";
import * as LruCache from "lru-cache";
import {PostDataService} from "../../../app/providers/postdataservice";
import {FeedAction} from "../feedaction";
import {Blog} from "../../../app/model/blog";
import {AuthenticationKeys} from "../../../app/constants/authenticationkeys";
import {BlogGuestPage} from "../../blog/blog-guest";

@IonicPage()
@Component({
  selector: 'page-blog-feed-guest',
  templateUrl: 'blog-feed-guest.html',

})
export class BlogFeedGuestPage {

  public static readonly SERVICE_NAME: string = "fetch_blog_json.php";
  public static readonly BASE_URL: string = ServiceAddress.DOMAIN +
    ServiceAddress.FOLDER + ServiceAddress.BLOG_FOLDER;
  public static readonly IMAGE_FOLDER = ServiceAddress.DOMAIN +
    ServiceAddress.FOLDER + ServiceAddress.UPLOAD_IMAGE_FOLDER +
    ServiceAddress.BLOG_FOLDER;

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
    let url: string = BlogFeedGuestPage.BASE_URL + "/" + BlogFeedGuestPage.SERVICE_NAME;

    if (action == FeedAction.REACH_BOTTOM) {

      if (this.cache.length % 2 == 0) {

        this.fetchDataBody.limit = "4";
      }else{
        this.fetchDataBody.limit = "3";
      }

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

  private createBlog(json: any): Blog{

    let news: Blog = new Blog(json.id, json.heading, json.content, json.image, json.author,
      json.created_date, json.published_date, json.signature, json.firstname, json.lastname, json.author_image);

    return news;
  }

  get imageFolder(): string{
    return BlogFeedGuestPage.IMAGE_FOLDER;
  }

  viewBlog(key: string){

    this.navCtrl.push('BlogGuestPage', {key});
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

      let blog:Blog = this.createBlog(item);
      let key: string = blog.id + "";

      this.cache.set(key, blog);
      this.cacheIndex.push(key);
    }
  }
}
