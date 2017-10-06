import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthenticationService} from "../../app/providers/authenticationservice";
import {AuthenticationCodes} from "../../app/constants/authenticationcodes";
import {TabsPage} from "../tabs/tabs";
import {User} from "../../app/model/user";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private id: number;
  private password: string;

  constructor(public navCtrl: NavController, private auth: AuthenticationService) {
  }

  login(){
    let response: any = this.auth.authenticate(this.id, this.password);
    this.postProcessFetchData(response);
  }

  private postProcessFetchData(response: any){

    response.subscribe((res) => {

      let code: number = res['code'];
      let userData: any = res['user'];

      if(code == AuthenticationCodes.USER_AUTHENTICATED){

        //save to database
        console.log("authenticated");

        //redirect to hometabpage
        let user: User = new User(userData.id, userData.password, userData.type);
        this.auth.user = user;

        this.navCtrl.push(TabsPage);

      }else if(code == AuthenticationCodes.INVALID_USER_ID_PASSWORD){

      }else if(code == AuthenticationCodes.IDENTITY_NOT_RECOGNZIED){

      }else{
        // invalid requests
      }

    });
  }
  //comment
  //login

}
