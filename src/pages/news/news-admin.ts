import {NewsGuestPage} from "./news-guest";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {PostDataService} from "../../app/providers/postdataservice";
import {AuthenticationService} from "../../app/providers/authenticationservice";
import {Component} from "@angular/core";
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-news-admin',
  templateUrl: 'news-admin.html',
})


export class NewsAdminPage extends NewsGuestPage{

  constructor(navCtrl: NavController, postDataService: PostDataService, private auth: AuthenticationService ,navParams: NavParams){
    super(navCtrl, postDataService,  navParams);


  }
}
