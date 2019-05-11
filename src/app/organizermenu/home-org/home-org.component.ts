import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Organizer } from 'src/app/services/organizer';

@Component({
  selector: 'app-home-org',
  templateUrl: './home-org.component.html',
  styleUrls: ['./home-org.component.scss']
})
export class HomeOrgComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  organizer$:Observable<Organizer>;
  user:Organizer;
  isLoggedIn:boolean=false;

  ngOnInit() {
    this.organizer$ = this.authService.getUserOrg;
    this.organizer$.subscribe(data=>{
      this.user=data;
    });
    if(this.user!=null){
      this.isLoggedIn=true;
    }
  }


}
