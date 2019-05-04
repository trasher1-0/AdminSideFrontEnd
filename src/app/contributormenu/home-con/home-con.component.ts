import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/services/contributor';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-con',
  templateUrl: './home-con.component.html',
  styleUrls: ['./home-con.component.scss']
})
export class HomeConComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  contributor$:Observable<Contributor>;
  user:Contributor;

  ngOnInit() {
    this.contributor$ = this.authService.getUser;
    this.contributor$.subscribe(data=>{
      this.user=data;
    });
  }

}
