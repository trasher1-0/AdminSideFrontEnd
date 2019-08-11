import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-systemstatistics',
  templateUrl: './systemstatistics.component.html',
  styleUrls: ['./systemstatistics.component.scss']
})
export class SystemstatisticsComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}
  public cameraUrl : SafeUrl;

  ngOnInit() {
    let url = "http://192.168.8.100:8080/jsfs.html";
    this.cameraUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.cameraUrl);
  }

}
