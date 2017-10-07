import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {NewsFeedAdminPage} from "./news-feed-admin";

import { Camera, CameraOptions } from '@ionic-native/camera';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

@NgModule({
  declarations: [
    NewsFeedAdminPage
  ],
  imports: [
    IonicPageModule.forChild(NewsFeedAdminPage)
  ], exports: [
    NewsFeedAdminPage
  ], providers:[
    Transfer, Camera
  ]
})
export class NewsFeedAdminModule {}
