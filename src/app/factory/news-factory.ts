import {AuthenticationCodes} from "../constants/authenticationcodes";
import {NewsFeedAdminPage} from "../../pages/feed/news/news-feed-admin";
import {NewsFeedGuestPage} from "../../pages/feed/news/news-feed-guest";
import {News} from "../model/news";

export class NewsFactory{

  static getFeedPageFromUserType(type: number): any{

    let page: any;

    switch (type){

      case AuthenticationCodes.SUPER_ADMIN:
      case AuthenticationCodes.ADMIN:
        page = 'NewsFeedAdminPage';
        break;
      case AuthenticationCodes. NORMAL:
      case AuthenticationCodes.GUEST:
        page = 'NewsFeedGuestPage';
        break;
      default:
        page = null;
        break;
    }

    return page;
  }

  static getPageFromUserType(type: number): any{

    let page: any;

    switch (type){

      case AuthenticationCodes.SUPER_ADMIN:
      case AuthenticationCodes.ADMIN:
        page = 'NewsAdminPage';
        break;
      case AuthenticationCodes. NORMAL:
      case AuthenticationCodes.GUEST:
        page = 'NewsGuestPage';
        break;
      default:
        page = null;
        break;
    }

    return page;
  }

  static createNews(json: any): News{

    let news: News = new News(json.id, json.content, json.image, json.author,
      json.created_date, json.published_date, json.signature, json.firstname, json.lastname, json.author_image);

    return news;
  }
}
