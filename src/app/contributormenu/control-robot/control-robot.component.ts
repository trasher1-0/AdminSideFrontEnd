import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-control-robot',
  templateUrl: './control-robot.component.html',
  styleUrls: ['./control-robot.component.scss']
})
export class ControlRobotComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}
  public cameraUrl : SafeUrl;
  public progress:boolean=false;

  ngOnInit() {
    let url = "http://192.168.43.165:8000/index.html";
    this.cameraUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.cameraUrl);
  }

  Start(){
    this.progress=true;
  }

  Stop(){
    this.progress=false;
  }

}
