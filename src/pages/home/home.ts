import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { StorageProvider } from './../../providers/storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  publishs: Observable<any[]>;

  constructor(
    private db: StorageProvider,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    public navCtrl: NavController) {
      this.publishs = this.db.getPublishs();
  }

  openOptions(publish) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Configurações',
      buttons: [
        {
          text: 'Apagar',
          role: 'apagar',
          handler: () => {
            this.removePost(publish);
          }
        },{
          text: 'Cancelar',
          role: 'cancelar'
        }
      ]
    });
    actionSheet.present();
  }

  removePost(publish) {
    let alert = this.alertCtrl.create({
      title: 'Apagar publicação',
      message: 'Deseja mesmo deletar esta publicação?',
      buttons: [
        {
          text: 'Sim',
          role: 'sim',
          handler: () => {
            this.db.removePublish(publish.key);
          }
        },
        {
          text: 'Não'
        }
      ]
    });

    alert.present();
  }
}



