import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {BlogFeedAdminPage} from "./blog-feed-admin";

@NgModule({
  declarations: [
    BlogFeedAdminPage
  ],
  imports: [
    IonicPageModule.forChild(BlogFeedAdminPage)
  ], exports: [
    BlogFeedAdminPage
  ]
})
export class BlogFeedAdminModule {}
