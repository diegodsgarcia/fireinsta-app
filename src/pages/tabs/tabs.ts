import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  profile = ProfilePage;
  home = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
