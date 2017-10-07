import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AddNewsPage} from "./add-news";
import {Transfer} from "@ionic-native/transfer";
import { Camera, CameraOptions } from '@ionic-native/camera';



@NgModule({
  declarations: [
    AddNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewsPage),
  ],providers:[
    Transfer,
    Camera
  ]
})
export class AddNewsPageModule {}
