import {Component} from "@angular/core";
import {BlogGuestPage} from "./blog-guest";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {PostDataService} from "../../app/providers/postdataservice";
import {AuthenticationService} from "../../app/providers/authenticationservice";

@IonicPage()
@Component({
  selector: 'page-blog-admin',
  templateUrl: 'blog-admin.html',
})


export class BlogAdminPage extends BlogGuestPage{

  constructor(navCtrl: NavController, postDataService: PostDataService, private auth: AuthenticationService ,navParams: NavParams){
    super(navCtrl, postDataService,  navParams);

  }


}
