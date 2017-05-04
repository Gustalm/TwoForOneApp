import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstablishmentListPage } from './establishment-list';

@NgModule({
  declarations: [
    EstablishmentListPage,
  ],
  imports: [
    IonicPageModule.forChild(EstablishmentListPage),
  ],
  exports: [
    EstablishmentListPage
  ]
})
export class EstablishmentListModule {}
