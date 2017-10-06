import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {PostDataService} from "../../../app/providers/postdataservice";
import {AnnouncementFeedGuestPage} from "./announcement-feed-guest";

@IonicPage()
@Component({
  selector: 'page-announcement-feed-admin',
  templateUrl: 'announcement-feed-admin.html'
})

export class AnnouncementFeedAdminPage extends AnnouncementFeedGuestPage{

  constructor(navCtrl: NavController, postDataService: PostDataService){
    super(navCtrl, postDataService);


  }

}
