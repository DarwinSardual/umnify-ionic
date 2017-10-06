import {BlogFeedGuestPage} from "./blog-feed-guest";
import {PostDataService} from "../../../app/providers/postdataservice";
import {NavController} from "ionic-angular";
import {AuthenticationService} from "../../../app/providers/authenticationservice";
import {Component} from "@angular/core";

@Component({
  selector: 'page-blog-feed-admin',
  templateUrl: 'blog-feed-admin.html',

})

export class BlogFeedAdminPage extends BlogFeedGuestPage{

  constructor(navCtrl: NavController,  postDataService: PostDataService, private auth: AuthenticationService){
    super(navCtrl, postDataService);


  }
}
