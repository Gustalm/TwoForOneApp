import { Component, ViewChild, ElementRef } from '@angular/core';
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

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [Geolocation]
})
export class MapPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps,
    public geolocation: Geolocation) {
  }

  ngAfterViewInit() {
    this.loadMap();
    this.loadMapJavascript();
  }

  @ViewChild('mapElement') mapElement: ElementRef;
  map: any;

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

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMapJavascript() {
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
