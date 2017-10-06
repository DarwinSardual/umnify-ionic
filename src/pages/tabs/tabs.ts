import { Component } from '@angular/core';

import {NotificationFeedPage} from "../feed/notification/notification-feed";
import {AuthenticationService} from "../../app/providers/authenticationservice";
import {NewsFactory} from "../../app/factory/news-factory";
import {BlogFactory} from "../../app/factory/blog-factory";
import {AnnouncementFactory} from "../../app/factory/announcement-factory";
import {IonicPage} from "ionic-angular";

@IonicPage()
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


    this.tab1Root = NewsFactory.getFeedPageFromUserType(type);
    this.tab2Root = BlogFactory.getFeedPageFromUserType(type);;
    this.tab3Root = AnnouncementFactory.getFeedPageFromUserType(type);
    this.tab4Root = 'NotificationFeedPage';
  }
}
