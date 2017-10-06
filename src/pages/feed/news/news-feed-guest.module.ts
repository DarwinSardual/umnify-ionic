import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NewsFeedGuestPage} from "./news-feed-guest";

@NgModule({
  declarations: [
    NewsFeedGuestPage
  ],
  imports: [
    IonicPageModule.forChild(NewsFeedGuestPage)
  ], exports: [
    NewsFeedGuestPage
  ]
})
export class NewsFeedGuestModule {}
