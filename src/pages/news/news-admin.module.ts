import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NewsAdminPage} from "./news-admin";

@NgModule({
  declarations: [
    NewsAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsAdminPage),
  ],
})
export class NewsAdminPageModule {}
