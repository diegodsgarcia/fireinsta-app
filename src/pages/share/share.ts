import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from "@ionic-native/geolocation";
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { StorageProvider } from '../../providers/storage';

@IonicPage()
@Component({
  selector: "page-share",
  templateUrl: "share.html"
})
export class SharePage {
  photo: any;
  location: any;
  description: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private storage: StorageProvider
  ) {
    this.photo = this.navParams.get("photo");
  }

  ionViewDidLoad() {

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

  share() {
    this.storage.insertPublish({
      name: 'User',
      image: this.photo,
      description: this.description || ""
    });

    this.navCtrl.pop();
  }
}
