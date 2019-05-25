import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  constructor(public db:AngularFireDatabase) { 
    this.coordinates=db.list('area');
  }
  choords:AngularFireList<any>;
  coordinates:AngularFireList<any>;

  getCoords(){
    this.choords=this.db.list('coords');
    return this.choords.snapshotChanges();
  }

  addCoords(choord:any){
    return this.coordinates.push(choord);
  }

}
