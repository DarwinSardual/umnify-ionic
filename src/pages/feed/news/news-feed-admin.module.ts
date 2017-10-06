import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NewsFeedGuestPage} from "./news-feed-guest";
import {NewsFeedAdminPage} from "./news-feed-admin";

@NgModule({
  declarations: [
    NewsFeedAdminPage
  ],
  imports: [
    IonicPageModule.forChild(NewsFeedAdminPage)
  ], exports: [
    NewsFeedAdminPage
  ]
})
export class NewsFeedAdminModule {}
