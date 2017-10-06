import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {BlogFeedGuestPage} from "./blog-feed-guest";

@NgModule({
  declarations: [
    BlogFeedGuestPage
  ],
  imports: [
    IonicPageModule.forChild(BlogFeedGuestPage),
  ], exports: [
    BlogFeedGuestPage
  ]
})
export class BlogFeedGuestModule {}
