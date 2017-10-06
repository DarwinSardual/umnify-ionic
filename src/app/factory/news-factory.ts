import {AuthenticationCodes} from "../constants/authenticationcodes";
import {NewsFeedAdminPage} from "../../pages/feed/news/news-feed-admin";
import {NewsFeedGuestPage} from "../../pages/feed/news/news-feed-guest";

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
}
