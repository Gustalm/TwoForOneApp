import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstablishmentService } from "../../../services/establishment.service";
import { Establishment } from "../../../models/establishment.model";

/**
 * Generated class for the EstablishmentDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-establishment-detail',
  templateUrl: 'establishment-detail.html',
})
export class EstablishmentDetailPage {
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private establishmentService: EstablishmentService) {
  }

  establishment: Establishment



}
