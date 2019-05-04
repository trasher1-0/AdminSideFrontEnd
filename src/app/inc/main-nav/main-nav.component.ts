import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Contributor } from 'src/app/services/contributor';
import { Organizer } from 'src/app/services/organizer';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

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

}
