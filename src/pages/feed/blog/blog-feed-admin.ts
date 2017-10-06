import {BlogFeedGuestPage} from "./blog-feed-guest";
import {PostDataService} from "../../../app/providers/postdataservice";
import {IonicPage, NavController} from "ionic-angular";
import {AuthenticationService} from "../../../app/providers/authenticationservice";
import {Component} from "@angular/core";

@IonicPage()
@Component({
  selector: 'page-blog-feed-admin',
  templateUrl: 'blog-feed-admin.html',

})

export class BlogFeedAdminPage extends BlogFeedGuestPage{

  constructor(navCtrl: NavController,  postDataService: PostDataService, private auth: AuthenticationService){
    super(navCtrl, postDataService);
  }

  viewBlog(key: string){
    this.navCtrl.push('BlogAdminPage', {key});
  }
}
