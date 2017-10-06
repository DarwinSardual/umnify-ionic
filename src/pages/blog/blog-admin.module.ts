import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {BlogAdminPage} from "./blog-admin";

@NgModule({
  declarations: [
    BlogAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogAdminPage),
  ],
  exports:[
    BlogAdminPage
  ]
})
export class BlogAdminPageModule {}
