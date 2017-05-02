import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstablishmentListPage } from "../establishment/list/establishment-list";
import { Page } from "ionic-angular/navigation/nav-util";


@IonicPage()
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html',
})
export class ManagerPage {
  establishmentPage = EstablishmentListPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page: Page) {
    console.log(page);
    this.navCtrl.push(page);
  }

}
