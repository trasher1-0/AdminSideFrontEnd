import { Component, OnInit } from '@angular/core';
import { RobotService } from 'src/app/services/robot.service';
import { MatDialog, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { RobotComponent } from './robot/robot.component';

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
  searchKey: string;

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

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onCreate() {
    this.robotService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(RobotComponent,dialogConfig);
  } 
  onEdit(robot) {
    console.log(robot);
    this.robotService.populateForm(robot);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(RobotComponent,dialogConfig);
  }

}
