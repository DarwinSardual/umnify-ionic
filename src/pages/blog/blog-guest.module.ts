import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {BlogGuestPage} from './blog-guest';

@NgModule({
  declarations: [
    BlogGuestPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogGuestPage),
  ],
  exports:[
    BlogGuestPage
  ]
})
export class BlogGuestPageModule {}
