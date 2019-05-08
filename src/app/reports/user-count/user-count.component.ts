import { Component, OnInit } from '@angular/core';
import { OrganizerService } from 'src/app/services/organizer.service';
import { ContributorService } from 'src/app/services/contributor.service';
import { RobotService } from 'src/app/services/robot.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.scss']
})
export class UserCountComponent implements OnInit {

  constructor(public conService : ContributorService,
    public orgService : OrganizerService,
    public robService : RobotService,
    public cusService :CustomerService) { }
  
  public conCount;
  public orgCount;
  public robCount;
  public inPending;
  public inSuccess;

  ngOnInit() {
    //Get Contributors Count
    this.conService.getCount().subscribe(data=>{
      this.conCount=data;
    })

    //Get Organizers Count
    this.orgService.getCount().subscribe(data=>{
      this.orgCount=data;
    })

    //Get Robots count
    this.robService.getCount().subscribe(data=>{
      this.robCount=data;
    })

    //Get Pending Invoice Count
    this.cusService.getCountPending().subscribe(data=>{
      this.inPending=data;
    })

    //Get Completed Invoice Count
    this.cusService.getCountComplete().subscribe(data=>{
      this.inSuccess=data;
    })
  }

}
