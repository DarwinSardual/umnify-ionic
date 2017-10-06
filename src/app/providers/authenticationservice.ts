import {PostDataService} from "./postdataservice";
import {User} from "../model/user";
import {Injectable} from "@angular/core";
import {AuthenticationKeys} from "../constants/authenticationkeys";
import {ServiceAddress} from "../constants/serviceaddress";
import {AuthenticationCodes} from "../constants/authenticationcodes";

@Injectable()
export class AuthenticationService{

  private _user: User;
  private static readonly SERVICE_NAME = "authenticate_login_json.php";
  public static readonly BASE_URL: string = ServiceAddress.DOMAIN +
    ServiceAddress.FOLDER + ServiceAddress.LOGIN_FOLDER;

  constructor(private postDataService: PostDataService){

  }

  authenticate(id: number, password: string){

    let postBody: any = AuthenticationKeys.getAuthentication();
    postBody.id = id;
    postBody.password = password;

    let response: any;
    let url: string = AuthenticationService.BASE_URL + "/" + AuthenticationService.SERVICE_NAME;


    response = this.postDataService.postData(url, postBody);
    return response;
  }


  set user(user: User){
    this._user = user;
  }

  get user(): User{
    return this._user;
  }
}
