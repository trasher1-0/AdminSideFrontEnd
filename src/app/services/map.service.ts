import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(public db:AngularFireDatabase) { }
  choords:AngularFireList<any>;

  getCoords(){
    this.choords=this.db.list('coords');
    return this.choords.snapshotChanges();
  }

}
