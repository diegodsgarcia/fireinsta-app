import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from "@ionic-native/geolocation";


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
    private geolocation: Geolocation
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
        this.location = resp;
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }
}
