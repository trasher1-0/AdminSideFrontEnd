import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }
  lat:number;
  lng:number;
  zoom = 14;

  ngOnInit() {
    this.getLocation();
    console.log(this.lat,this.lng);
  }

  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat=position.coords.latitude;
        this.lng=position.coords.longitude;
      })
    }
  }

}
