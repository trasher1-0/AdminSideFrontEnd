import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ContributorService } from '../../../services/contributor.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { ContributorComponent } from '../contributor/contributor.component';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-viewcontributor',
  templateUrl: './viewcontributor.component.html',
  styleUrls: ['./viewcontributor.component.scss']
})
export class ViewcontributorComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  contributors: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'username', 'fullname', 'address','city','mobile','email','password','actions'];
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;

  constructor(
    private contributorService : ContributorService ,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    

    
    private dialogService: DialogService) { }

  ngOnInit() {
    this.contributorService.getAllContributors().subscribe(data=>{
        this.contributors=data;
      });
    
      this.contributorService.getAllContributors().subscribe(
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
        this.contributorService.deleteContributor(id).subscribe(result => {
        }, error => console.error(error));
        this.ngOnInit();
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
    this.contributorService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ContributorComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
    })
  }

  onEdit(row){
    localStorage.setItem('Editusername',row.username);
    console.log(row);
    this.contributorService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ContributorComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
      localStorage.setItem('Editusername',null);
    })
  }

  refresh(){
    this.contributorService.getAllContributors().subscribe(
      list => {
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }
}
