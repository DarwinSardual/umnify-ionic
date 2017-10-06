import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AnnouncementFeedGuestPage} from "./announcement-feed-guest";

@NgModule({
  declarations: [
    AnnouncementFeedGuestPage
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementFeedGuestPage)
  ], exports: [
    AnnouncementFeedGuestPage
  ]
})
export class AnnouncementFeedGuestModule {}
