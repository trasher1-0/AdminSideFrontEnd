import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedInCon$ = this.authService.isLoggedInCon;
    console.log(this.isLoggedIn$);
    console.log(this.isLoggedInCon$);
  }

  onLogout() {
    this.authService.logoutAdmin();
  }

  onLogoutCon() {
    this.authService.logoutContributor();
  }

}
