import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';
import { NotificationService } from './notification.service';

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
  ) {}

  public API = 'http://localhost:8080/trasher/api';
  public ADMINAUTH_API = this.API + '/adminAuth';

  a:string;
  login(user: User) {
    this.http.post(this.ADMINAUTH_API,{
      'id':1,
      'username':user.userName,
      'password':user.password
    }).subscribe(data=>
      this.a=data.toString()
    );

    if (this.a=='true') {
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
      this.notificationService.success("Successfull Login!");
    }
    else{
      this.notificationService.warn('Error Login details!');
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/userlogin']);
  }
}
