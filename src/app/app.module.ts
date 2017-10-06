import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {HttpClientModule} from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// My modules



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NewsFeedGuestPage} from '../pages/feed/news/news-feed-guest';
import {BlogFeedGuestPage} from "../pages/feed/blog/blog-feed-guest";
import {AnnouncementFeedGuestPage} from "../pages/feed/annoucement/announcement-feed-guest";
import {NotificationFeedPage} from "../pages/feed/notification/notification-feed";
import {LoginPage} from "../pages/login/login";
import {NewsFeedAdminPage} from "../pages/feed/news/news-feed-admin";
import {BlogGuestPage} from "../pages/blog/blog-guest";
import {BlogAdminPage} from "../pages/blog/blog-admin";
import {BlogFeedAdminPage} from "../pages/feed/blog/blog-feed-admin";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsFeedGuestPage,
    NewsFeedAdminPage,
    BlogFeedGuestPage,
    BlogFeedAdminPage,
    BlogGuestPage,
    BlogAdminPage,
    AnnouncementFeedGuestPage,
    NotificationFeedPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NewsFeedGuestPage,
    NewsFeedAdminPage,
    BlogFeedGuestPage,
    BlogFeedAdminPage,
    BlogGuestPage,
    BlogAdminPage,
    AnnouncementFeedGuestPage,
    NotificationFeedPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
