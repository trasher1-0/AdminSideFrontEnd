import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';
import { NotificationService } from './notification.service';
import { AuthGuard } from '../auth/auth.guard';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private notificationService:NotificationService
  ) {
  }

  public API = 'http://localhost:8080/trasher/api';
  public ADMINAUTH_API = this.API + '/adminAuth';
  public a:string;
  
  login(user: User) {
    console.log(user);
    this.http.post(this.ADMINAUTH_API,{
      'username':user.userName,
      'password':user.password
    }).subscribe(data=>{
      this.a=data.toString();
      console.log(this.a);
      if (this.a=='true') {
        this.loggedIn.next(true);
        this.notificationService.success("Successfull Login!");
        this.router.navigate(['/home']);
      }
      else{
        this.notificationService.warn('Error Login details!');
        this.router.navigate(['/userlogin']);
      }
    }
    );
  }

  logout() {
    this.loggedIn.next(false);
    this.a="false";
    this.router.navigate(['/userlogin']);
  }
}
