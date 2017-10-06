import {AuthenticationCodes} from "../constants/authenticationcodes";
import {AnnouncementFeedAdminPage} from "../../pages/feed/annoucement/announcement-feed-admin";
import {AnnouncementFeedGuestPage} from "../../pages/feed/annoucement/announcement-feed-guest";

export class AnnouncementFactory{

  static getFeedPageFromUserType(type: number): any{

    let page: any;

    switch (type){

      case AuthenticationCodes.SUPER_ADMIN:
        page = 'AnnouncementFeedAdminPage';
        break;
      case AuthenticationCodes.ADMIN:
      case AuthenticationCodes. NORMAL:
      case AuthenticationCodes.GUEST:
        page = 'AnnouncementFeedGuestPage';
        break;
      default:
        page = null;
        break;
    }

    return page;
  }
}
