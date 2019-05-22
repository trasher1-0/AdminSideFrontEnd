import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public mapService:MapService) { }
  lat:number;
  lng:number;
  zoom = 14;
  coords=[];

  ngOnInit() {
    //this.getMyLocation();
    this.mapService.getCoords().subscribe(list=>{
      this.coords=list.map(item=>{
        return {
          $key:item.key,
          ...item.payload.val()
        };
      })
      this.lat=this.coords[0]['latitude'];
      this.lng=this.coords[0]['longitude'];
    })
  }

  // getMyLocation(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(position=>{
  //       this.lat=position.coords.latitude;
  //       this.lng=position.coords.longitude;
  //     })
  //   }
  // }
}
