import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Blog} from "../../app/model/blog";
import {PostDataService} from "../../app/providers/postdataservice";
import {AuthenticationKeys} from "../../app/constants/authenticationkeys";
import {BlogFeedGuestPage} from "../feed/blog/blog-feed-guest";

@IonicPage()
@Component({
  selector: 'page-blog-guest',
  templateUrl: 'blog-guest.html',
})
export class BlogGuestPage {

  private blog: Blog;

  constructor(public navCtrl: NavController, protected postDataService: PostDataService, protected navParams: NavParams) {

    let key = this.navParams.data.key;

    //before fetching to remote, check localdb first

    let postDataBody: any = AuthenticationKeys.getAuthentication();
    postDataBody.id = key;

    let url: string = BlogFeedGuestPage.BASE_URL + "/" + BlogFeedGuestPage.SERVICE_NAME;
    let response: any = this.postDataService.postData(url, postDataBody);
    this.postProcessFetchData(response)
  }

  postProcessFetchData(response: any){

    response.subscribe((res) =>{

      let array: any = res['data'];
      let data: any = array.pop();
      this.blog = new Blog(data.id, data.heading, data.content, data.image, data.author, data.created_date,
        data.published_date, data.signature, data.firstname, data.lastname, data.author_image);
    });
  }

  getImageFolder(){
    return BlogFeedGuestPage.IMAGE_FOLDER;
  }
}
