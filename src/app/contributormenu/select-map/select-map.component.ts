import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { MapLoaderService } from 'src/app/services/map-loader.service';
import { Observable } from 'rxjs';
import { FunctionCall } from '@angular/compiler';
declare var google: any;

@Component({
  selector: 'app-select-map',
  templateUrl: './select-map.component.html',
  styleUrls: ['./select-map.component.scss']
})
export class SelectMapComponent implements OnInit {

  constructor(public mapService:MapService) { }
  lat:number;
  lng:number;
  zoom = 14;
  coords=[];
  map: any;
  drawingManager: any;
  gardenCoords:any;
  polygonCoords=[];

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

      MapLoaderService.load().then(() => {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: { lat:this.lat, lng:this.lng },
          zoom: 17
        });

        const myLatLng={lat:this.lat, lng:this.lng}
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: this.map,
          title: 'Robot Location!'
        });
        this.drawPolygon();
      })

    });

    
  }

  drawPolygon(){
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      }
    });

    this.drawingManager.setMap(this.map);
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (event) => {
      // Polygon drawn
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        //this is the coordinate, you can assign it to a variable or pass into another function.
        this.gardenCoords=event.overlay.getPath().getArray();
        let i=0;
        while(i<this.gardenCoords.length){
          this.polygonCoords.push({
            'lat':this.gardenCoords[i].lat(),
            'lng':this.gardenCoords[i].lng()
          });
          i=i+1;
        }
        console.log(this.polygonCoords);
        this.mapService.addCoords(this.polygonCoords);
      }
    });
  }

  Clean(){
    this.ngOnInit();
  }

}
