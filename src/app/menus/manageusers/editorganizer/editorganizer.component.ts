import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-editorganizer',
  templateUrl: './editorganizer.component.html',
  styleUrls: ['./editorganizer.component.scss']
})
export class EditorganizerComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditorganizerComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
