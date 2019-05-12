import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Contributor } from './services/contributor';
import { Organizer } from './services/organizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  
  isLoggedIn$: Observable<boolean>;
  isLoggedInCon$: Observable<boolean>;
  isLoggedInOrg$: Observable<boolean>;
  contributor$:Observable<Contributor>;
  organizer$:Observable<Organizer>;

  user:Contributor;
  userOrg:Organizer;

  constructor(private authService: AuthService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedInCon$ = this.authService.isLoggedInCon;
    this.isLoggedInOrg$ = this.authService.isLoggedInOrg;
    
    this.contributor$ = this.authService.getUser;
    this.organizer$ = this.authService.getUserOrg;

    this.contributor$.subscribe(data=>{
      this.user=data;
    });

    this.organizer$.subscribe(data=>{
      this.userOrg=data;
    });

  }

  onLogout() {
    this.authService.logoutAdmin();
  }

  onLogoutCon() {
    this.authService.logoutContributor();
  }

  onLogoutOrg() {
    this.authService.logoutOrganizer();
  }

  get tokenAdmin() {
    return localStorage.getItem('tokenadmin');
  }

  get tokenCont() {
    return localStorage.getItem('tokencont');
  }

  get tokenOrg() {
    return localStorage.getItem('tokenorg');
  }

}
