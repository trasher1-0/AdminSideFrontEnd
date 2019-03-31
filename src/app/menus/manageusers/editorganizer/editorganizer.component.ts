import { ManageusersComponent } from './../manageusers.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-editorganizer',
  templateUrl: './editorganizer.component.html',
  styleUrls: ['./editorganizer.component.scss']
})
export class EditorganizerComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }

}

