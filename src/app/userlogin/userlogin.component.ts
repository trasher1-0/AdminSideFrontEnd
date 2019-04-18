import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  admins : Array<any>;
  constructor(public adminService:AdminService) { }
  
  ngOnInit() {
    this.adminService.getAllAdmins().subscribe(data=>{
    this.admins=data
  })
  }

  onClick(){
    console.log(this.admins);
  }
}
