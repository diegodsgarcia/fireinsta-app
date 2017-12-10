import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  photos: Observable<any[]>;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: StorageProvider) {
  }

  ionViewDidLoad() {
    this.photos = this.storage.getPublishs()
  }

}
