import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  constructor(
    private router:Router
  ){  }
  ngOnInit(){
  }

  goAdminLogin(){
    this.router.navigate(['/adminlogin']);
  }

  goContLogin(){
    this.router.navigate(['/contlogin']);
  }

  goOrgLogin(){
    this.router.navigate(['/orglogin']);
  }
}
