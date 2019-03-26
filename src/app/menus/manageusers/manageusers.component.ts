import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {
  displayedColumns: string[] = ['username', 'name', 'address', 'mobile'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

  export interface PeriodicElement {
    name: string;
    username: number;
    address: number;
    mobile: string;
  }

  const ELEMENT_DATA: PeriodicElement[] = [
    {username: 1, name: 'Hydrogen', address: 1.0079, mobile: 'H'},
    {username: 2, name: 'Helium', address: 4.0026, mobile: 'He'},
    {username: 3, name: 'Lithium', address: 6.941, mobile: 'Li'},
    {username: 4, name: 'Beryllium', address: 9.0122, mobile: 'Be'},
    {username: 5, name: 'Boron', address: 10.811, mobile: 'B'},
    {username: 6, name: 'Carbon', address: 12.0107, mobile: 'C'},
    {username: 7, name: 'Nitrogen', address: 14.0067, mobile: 'N'},
    {username: 8, name: 'Oxygen', address: 15.9994, mobile: 'O'},
    {username: 9, name: 'Fluorine', address: 18.9984, mobile: 'F'},
    {username: 10, name: 'Neon', address: 20.1797, mobile: 'Ne'},
    {username: 11, name: 'Sodium', address: 22.9897, mobile: 'Na'},
    {username: 12, name: 'Magnesium', address: 24.305, mobile: 'Mg'},
    {username: 13, name: 'Aluminum', address: 26.9815, mobile: 'Al'},
    {username: 14, name: 'Silicon', address: 28.0855, mobile: 'Si'},
    {username: 15, name: 'Phosphorus', address: 30.9738, mobile: 'P'},
    {username: 16, name: 'Sulfur', address: 32.065, mobile: 'S'},
    {username: 17, name: 'Chlorine', address: 35.453, mobile: 'Cl'},
    {username: 18, name: 'Argon', address: 39.948, mobile: 'Ar'},
    {username: 19, name: 'Potassium', address: 39.0983, mobile: 'K'},
    {username: 20, name: 'Calcium', address: 40.078, mobile: 'Ca'},
  ];

