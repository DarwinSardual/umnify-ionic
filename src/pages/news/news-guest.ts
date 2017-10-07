import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostDataService} from "../../app/providers/postdataservice";
import {AuthenticationKeys} from "../../app/constants/authenticationkeys";
import {News} from "../../app/model/news";
import {NewsFeedGuestPage} from "../feed/news/news-feed-guest";
import {NewsFactory} from "../../app/factory/news-factory";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-guest',
  templateUrl: 'news-guest.html',
})
export class NewsGuestPage {

  private news: News;

  constructor(public navCtrl: NavController,protected postDataService: PostDataService, public navParams: NavParams) {

    let key = this.navParams.data.key;

    let postDataBody: any = AuthenticationKeys.getAuthentication();
    postDataBody.id = key;

    let url: string = NewsFeedGuestPage.BASE_URL + "/" + NewsFeedGuestPage.SERVICE_NAME;
    let response: any = this.postDataService.postData(url, postDataBody);
    this.postProcessFetchData(response);
  }

  postProcessFetchData(response: any){

    response.subscribe((res) => {

      let array: any = res['data'];
      let data: any = array.pop();

      this.news = NewsFactory.createNews(data);
    })
  }

  getImageFolder(){
    return NewsFeedGuestPage.IMAGE_FOLDER;
  }
}
