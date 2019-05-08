import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {}
  public cameraUrl : SafeUrl;

  ngOnInit() {
    let url = "http://192.168.43.165:8000/index.html";
    this.cameraUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.cameraUrl);
  }

}
