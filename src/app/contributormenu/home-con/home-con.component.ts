import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/services/contributor';
import { AuthService } from 'src/app/services/auth.service';
import { RobotService } from 'src/app/services/robot.service';
@Component({
  selector: 'app-home-con',
  templateUrl: './home-con.component.html',
  styleUrls: ['./home-con.component.scss']
})
export class HomeConComponent implements OnInit {

  constructor(private authService: AuthService,
    private robotService:RobotService) { }
  
  contributor$:any;
  user:any;
  robot:any;

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('usercon'));
    this.robotService.getMyRobot(this.user['id']).subscribe(data=>{
      this.robot=data;
      //console.log("Roboot",this.robot);
    });
  }

  get isLoggedIn(){
    return localStorage.getItem('tokencont');
  }

}
