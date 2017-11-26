import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from "@ionic-native/geolocation";
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';


@IonicPage()
@Component({
  selector: "page-share",
  templateUrl: "share.html"
})
export class SharePage {
  photo: any;
  location: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {
    this.photo = this.navParams.get("photo");
  }

  ionViewDidLoad() {
    console.log(this.photo);
  }

  getCurrentPosition() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        this.convertCoordenateToAddress(resp.coords.latitude, resp.coords.longitude)
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  convertCoordenateToAddress(lat: number, long: number) {
    this.nativeGeocoder.reverseGeocode(lat, long)
    .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
    .catch((error: any) => console.log(error));
  }
}
