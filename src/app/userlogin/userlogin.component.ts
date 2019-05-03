import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  ngOnInit(){
    
  }
}
