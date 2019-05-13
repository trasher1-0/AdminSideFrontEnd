import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
      if (localStorage.getItem('tokenadmin')=='null'&&
      localStorage.getItem('tokencont')=='null' &&
      localStorage.getItem('tokenorg')=='null' ){
        console.log("check");
        this.router.navigate(['/userlogin']);
        return false;
      }
      else{
        return true;
      }
  }
}
