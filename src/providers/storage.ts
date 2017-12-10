import { AngularFireDatabase } from 'angularfire2/database';
import { Publish } from './../models/publish';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageProvider {

  constructor(private db: AngularFireDatabase) {

  }

  insertPublish(publish: Publish) {
    this.db.list('publishs').push(publish);
  }

  getPublishs() {
    return this.db.list('publishs').snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  removePublish(key: string) {
    return this.db.list('publishs').remove(key);

  }

}
