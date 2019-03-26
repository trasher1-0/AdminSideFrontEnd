import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regusers',
  templateUrl: './regusers.component.html',
  styleUrls: ['./regusers.component.scss']
})
export class RegusersComponent implements OnInit {

  hide = true;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
