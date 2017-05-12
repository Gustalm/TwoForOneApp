import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { EstablishmentService } from "../../services/establishment.service";
import { Establishment } from "../../models/establishment.model";
//todo refactor
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [Geolocation]
})
export class MapPage implements OnInit {
  @ViewChild('mapElement') mapElement: ElementRef;
  establishments: Establishment[] = [];
  map: any;
  //todo refactor
  markers: any[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    public geolocation: Geolocation,
    private establishmentsService: EstablishmentService) {

    this.establishments = this.establishmentsService.getEstablishments();
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.loadMap();
    this.loadMapJavascript();
  }

  loadMap() {
    // let element: HTMLElement = document.getElementById('map');
    // console.log("element original");
    // console.log(element);
    // console.log("viewchild");
    // // console.log(this.mapElement.nativeElement);
    // let map: GoogleMap = this.googleMaps.create(this.mapElement.nativeElement, {
    //   controls: {
    //     'compass': true,
    //     'myLocationButton': true,
    //     'indoorPicker': true,
    //     'zoom': true
    //   },
    //   'gestures': {
    //     'scroll': true,
    //     'tilt': true,
    //     'rotate': true,
    //     'zoom': true
    //   },
    // });

    // map.one(GoogleMapsEvent.MAP_READY).then((param: any) => {
    //   console.log('Map is ready!')
    //   console.log(param);
    // });


  }

  loadMapJavascript() {
    this.geolocation.getCurrentPosition().then((position) => {
      //TODO: refactor this to a service
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      var iconBase = "/assets/images/map/"
      var icons = {
        parking: {
          icon: iconBase + 'restaurant.png'
        },
        library: {
          icon: iconBase + 'culture.png'
        },
        info: {
          icon: iconBase + 'hanggliding.png'
        }
      };

      let localvar = this.establishments;

      // localvar.forEach(function (establishment) {
      //   let marker = new google.maps.Marker({
      //     position: new google.maps.LatLng(establishment.latitude, establishment.longitude),
      //     icon: icons['info'].icon,
      //     map: this.map
      //   });
      // });
    });
  }

}
