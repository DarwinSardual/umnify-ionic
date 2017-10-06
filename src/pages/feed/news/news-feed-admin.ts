import {NavController} from "ionic-angular";
import {PostDataService} from "../../../app/providers/postdataservice";
import {NewsFeedGuestPage} from "./news-feed-guest";
import {Component} from "@angular/core";
import {AuthenticationService} from "../../../app/providers/authenticationservice";

@Component({
  selector: 'page-news-feed-admin',
  templateUrl: 'news-feed-admin.html'
})


export class NewsFeedAdminPage extends NewsFeedGuestPage{

  constructor(navCtrl: NavController, postDataService: PostDataService, private auth: AuthenticationService){
    super(navCtrl, postDataService);

    
  }
}
