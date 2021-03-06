import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";
import { MapPage } from "../pages/map/map";
import { ManagerPage } from "../pages/manager/manager";
import { MenuButtonComponent } from "../menu/menu-button.component";
import { EstablishmentService } from "../services/establishment.service";
import { EstablishmentListPage } from "../pages/establishment/list/establishment-list";
import { EstablishmentDetailPage } from "../pages/establishment/detail/establishment-detail";

import { GoogleMaps } from "@ionic-native/google-maps";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MapPage,
    ManagerPage,
    MenuButtonComponent,
    EstablishmentListPage,
    EstablishmentDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-round-back'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MapPage,
    ManagerPage,
    EstablishmentListPage,
    EstablishmentDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EstablishmentService,
    GoogleMaps,

  ]
})
export class AppModule { }
