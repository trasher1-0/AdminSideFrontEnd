import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';
import { NotificationService } from './notification.service';
import { AuthGuard } from '../auth/auth.guard';
import { Contributor } from './contributor';
import { Organizer } from './organizer';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loggedInCon: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loggedInOrg: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private user: BehaviorSubject<Contributor> = new BehaviorSubject<Contributor>(null);
  private userOrg:BehaviorSubject<Organizer> =new BehaviorSubject<Organizer>(null);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isLoggedInCon() {
    return this.loggedInCon.asObservable();
  }

  get isLoggedInOrg() {
    return this.loggedInOrg.asObservable();
  }

  get getUser(){
    return this.user.asObservable();
  }

  get getUserOrg(){
    return this.userOrg.asObservable();
  }
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private notificationService:NotificationService
  ) {
  }

  //Admin Login
  public API = 'http://localhost:8080/trasher/api';
  public ADMINAUTH_API = this.API + '/adminAuth';
  public a:string;
  
  loginAdmin(user: User) {
    console.log(user);
    this.http.post(this.ADMINAUTH_API,{
      'username':user.username,
      'password':user.password
    }).subscribe(data=>{
      this.a=data.toString();
      console.log(this.a);
      if (this.a=='true' && user.username=='admin') {
        this.loggedIn.next(true);
        localStorage.setItem('tokenadmin','admin');
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

  logoutAdmin() {
    this.loggedIn.next(false);
    this.a="false";
    localStorage.setItem('tokenadmin',null);
    this.router.navigate(['/userlogin']);
  }

  //Contributor login 

  public CONTRIAUTH_API = this.API + '/contributorAuth';
  public cont:any;

  loginContributor(contributor: Contributor) {
    console.log(contributor);
    this.http.post(this.CONTRIAUTH_API,contributor).subscribe(data=>{
      this.cont=data;
      console.log(this.cont);
      if (this.cont.id!=null) {
        this.loggedInCon.next(true);
        this.notificationService.success("Successfull Login!");
        this.user.next(this.cont);
        localStorage.setItem('usercon',JSON.stringify(this.cont));
        console.log(this.loggedInCon);
        this.router.navigate(['contributor/home']);
        localStorage.setItem('tokencont','cont');
      }
      else{
        this.notificationService.warn('Error Login details!');
        this.router.navigate(['/userlogin']);
      }
    }
    );
  }

  logoutContributor() {
    this.loggedInCon.next(false);
    localStorage.setItem('tokencont',null);
    localStorage.setItem('usercon',null);
    this.router.navigate(['/userlogin']);
  }

  //Organizer Login

  //Contributor login 

  public ORGAUTH_API = this.API + '/organizerAuth';
  public org:any;

  loginOrganizer(organizer: Organizer) {
    console.log(organizer);
    this.http.post(this.ORGAUTH_API,organizer).subscribe(data=>{
      this.org=data;
      console.log(this.org);
      if (this.org.id!=null) {
        this.loggedInOrg.next(true);
        this.notificationService.success("Successfull Login!");
        this.userOrg.next(this.org);
        localStorage.setItem('tokenorg','org');
        localStorage.setItem('userorg',JSON.stringify(this.org));
        this.router.navigate(['organizer/home']);
      }
      else{
        this.notificationService.warn('Error Login details!');
        this.router.navigate(['/userlogin']);
      }
    }
    );
  }

  logoutOrganizer() {
    this.loggedInOrg.next(false);
    localStorage.setItem('tokenorg',null);
    localStorage.setItem('userorg',null);
    this.router.navigate(['/userlogin']);
  }
}
