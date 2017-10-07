import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsGuestPage } from './news-guest';

@NgModule({
  declarations: [
    NewsGuestPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsGuestPage),
  ],
})
export class NewsGuestPageModule {}
