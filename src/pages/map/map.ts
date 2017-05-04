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

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps) {
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  @ViewChild('mapElement') mapElement: ElementRef;

  loadMap() {
    // let element: HTMLElement = document.getElementById('map');
    // console.log("element original");
    // console.log(element);
    // console.log("viewchild");
    // // console.log(this.mapElement.nativeElement);
    let map: GoogleMap = this.googleMaps.create(this.mapElement.nativeElement, {
      controls: {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
    });

    map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));

  }
}
