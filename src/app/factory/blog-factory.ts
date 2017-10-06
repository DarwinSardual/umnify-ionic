import {AuthenticationCodes} from "../constants/authenticationcodes";
import {BlogAdminPage} from "../../pages/blog/blog-admin";
import {BlogGuestPage} from "../../pages/blog/blog-guest";
import {BlogFeedGuestPage} from "../../pages/feed/blog/blog-feed-guest";
import {BlogFeedAdminPage} from "../../pages/feed/blog/blog-feed-admin";

export class BlogFactory{

  static getFeedPageFromUserType(type: number): any{

    let page: any;

    switch (type){

      case AuthenticationCodes.SUPER_ADMIN:
      case AuthenticationCodes.ADMIN:
        page = 'BlogFeedAdminPage';
        break;
      case AuthenticationCodes. NORMAL:
      case AuthenticationCodes.GUEST:
        page = 'BlogFeedGuestPage';
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
        page = BlogAdminPage;
        break;
      case AuthenticationCodes. NORMAL:
      case AuthenticationCodes.GUEST:
        page = BlogGuestPage;
        break;
      default:
        page = null;
        break;
    }

    return page;
  }
}
