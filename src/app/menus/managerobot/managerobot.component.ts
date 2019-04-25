import { Component, OnInit } from '@angular/core';
import { RobotService } from 'src/app/services/robot.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-managerobot',
  templateUrl: './managerobot.component.html',
  styleUrls: ['./managerobot.component.scss']
})
export class ManagerobotComponent implements OnInit {

  constructor(private robotService:RobotService,
    private dialog: MatDialog,
    private notificationService: NotificationService,  
    private dialogService: DialogService
    ) { }

  public robots:Array<any>;
  listData: MatTableDataSource<any>;

  ngOnInit() {
    this.robotService.getAllrobots().subscribe(data=>{
      this.robots=data;
      console.log(this.robots);
    });  
  }

  remove(id:string){
    this.dialogService.openConfirmDialog('Are you sure to delete this Robot ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.robotService.deleteRobot(id).subscribe(result => {
        }, error => console.error(error));
        this.ngOnInit();
        this.ngOnInit();
        this.ngOnInit();
        this.ngOnInit();
        this.ngOnInit();
        this.ngOnInit();
        this.notificationService.warn('! Deleted successfully');      
      }    
    });
  }

}
