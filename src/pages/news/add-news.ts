
import {Component} from "@angular/core";
import {IonicPage} from "ionic-angular";
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Transfer,TransferObject, FileUploadOptions} from "@ionic-native/transfer";


@IonicPage()
@Component({
  selector: 'page-add-news-admin',
  templateUrl: 'add-news.html',
})

export class AddNewsPage{

  private imageSrc: any;

  constructor(private transfer: Transfer, private camera: Camera){


  }

  upload(){

    let cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    }

    this.camera.getPicture(cameraOptions).then((image)=>{

      this.imageSrc = image;

      let fileTransfer: TransferObject = this.transfer.create();
      let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: 'image.jpg',
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params : {'id': "1234"}
      };

      fileTransfer.upload(image, "http://192.168.122.1/~darwin/UMnifyMobileScripts/something.php",
        options).then((res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      });

    });


    /*let fileTransfer: TransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'image.jpg',
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'id': "1234"}
    };

    fileTransfer.upload("", "http://192.168.122.1/~darwin/UMnifyMobileScripts/something.php",
      options).then((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });*/
  }
}
