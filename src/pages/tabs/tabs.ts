import { Component } from '@angular/core';

import {NotificationFeedPage} from "../feed/notification/notification-feed";
import {AnnouncementFeedGuestPage} from "../feed/annoucement/announcement-feed-guest";
import {AuthenticationService} from "../../app/providers/authenticationservice";
import {NewsFactory} from "../../components/news-factory";
import {BlogFactory} from "../../components/blog-factory";
import {NewsFeedGuestPage} from "../feed/news/news-feed-guest";
import {BlogFeedGuestPage} from "../feed/blog/blog-feed-guest";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor(private auth: AuthenticationService) {

    let type: number = this.auth.user.type;


    this.tab1Root = NewsFactory.getNewsFeedPageFromUserType(type);
    this.tab2Root = BlogFactory.getBlogFeedPageFromUserType(type);;
    this.tab3Root = AnnouncementFeedGuestPage;
    this.tab4Root = NotificationFeedPage;
  }
}
