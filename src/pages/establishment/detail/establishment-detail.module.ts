import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentDetailPage } from './establishment-detail';

@NgModule({
  declarations: [
    EstablishmentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablishmentDetailPage),
  ],
  exports: [
    EstablishmentDetailPage
  ]
})
export class EstablishmentDetailModule {}
