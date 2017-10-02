import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {NewsPage} from "../feed/news/newspage";
import {NotificationPage} from "../feed/notification/notificationpage";
import {AnnouncementPage} from "../feed/annoucement/announcementpage";
import {BlogPage} from "../feed/blog/blogpage";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  //tab1Root = HomePage;
  tab1Root = NewsPage;
  tab2Root = BlogPage;
  tab3Root = AnnouncementPage;
  tab4Root = NotificationPage;

  constructor() {

  }
}
