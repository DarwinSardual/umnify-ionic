import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AnnouncementFeedAdminPage} from "./announcement-feed-admin";

@NgModule({
  declarations: [
    AnnouncementFeedAdminPage
  ],
  imports: [
    IonicPageModule.forChild(AnnouncementFeedAdminPage)
  ], exports: [
    AnnouncementFeedAdminPage
  ]
})
export class AnnouncementFeedAdminModule {}
