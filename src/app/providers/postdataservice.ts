import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/Rx';

@Injectable()

export class PostDataService{

  private _http: HttpClient;

  constructor(http: HttpClient){
      this._http = http;

  }

  postData(url: string, body: {[key: string]: string}){

    let response: any = this._http.post(url, body,{
      headers: new HttpHeaders().set('Content-Type', 'text/plain')
    });

    return response;
  }

  get http(): HttpClient{
    return this._http;
  }
}
