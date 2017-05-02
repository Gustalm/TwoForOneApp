import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EstablishmentService } from "../../../services/establishment.service";
import { Establishment } from "../../../models/establishment.model";
import { EstablishmentDetailPage } from "../detail/establishment-detail";

@IonicPage()
@Component({
  selector: 'page-establishment-list',
  templateUrl: 'establishment-list.html',
})
export class EstablishmentListPage implements OnInit {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private establishmentService: EstablishmentService,
    private alertCtrl: AlertController) {

  }

  detailPage = EstablishmentDetailPage;

  establishments: Establishment[];

  ngOnInit(): void {
    this.establishments = this.establishmentService.getEstablishments();
  }

  onCall(establishment: Establishment) {
    console.log("clicou ligar");
    let alert = this.alertCtrl.create({
      title: 'Ligar',
      message: 'Deseja ligar para ' + establishment.name + " ?",
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            console.log("ligou");
          }
        },
        {
          text: 'Não',
          handler: () => {
            return;
          }
        }
      ]
    })

    alert.present();

  }
}
