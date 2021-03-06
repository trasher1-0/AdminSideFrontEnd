import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatSort, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { OrganizerComponent } from '../organizer/organizer.component';
import { delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-vieworganizer',
  templateUrl: './vieworganizer.component.html',
  styleUrls: ['./vieworganizer.component.scss']
})
export class VieworganizerComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  organizers: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'username', 'fullname', 'address','city','mobile','email','password','actions'];
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;

  constructor(
    private organizerService : OrganizerService ,
    private dialog: MatDialog,
    private notificationService: NotificationService, 
    private dialogService: DialogService) { }

  ngOnInit() {
    this.organizerService.getAllOrganizers().subscribe(data=>{
        this.organizers=data;
      });
    
      this.organizerService.getAllOrganizers().subscribe(
        list => {
          this.listData = new MatTableDataSource(list);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
          // this.listData.filterPredicate = (data, filter) => {
          //   return this.displayedColumns.some(ele => {
          //     return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          //   });
          // };
        });
  }

  remove(id:string){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.organizerService.deleteOrganizer(id).subscribe(result => {
        }, error => console.error(error));
        this.notificationService.warn('! Deleted successfully');   
      }
      this.refresh();
         
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
    this.organizerService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(OrganizerComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
    })
  }

  onEdit(row){
    console.log(row);
    localStorage.setItem('Editusername',row.username);
    this.organizerService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(OrganizerComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
      localStorage.setItem('Editusername',null);
    })
  }

  refresh(){
    this.organizerService.getAllOrganizers().subscribe(
      list => {
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

}