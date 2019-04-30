import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  customers: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['invoiceno', 'username', 'fullname', 'address','city','mobile','email','date','timeperiod','status','actions'];
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;

  constructor(
    private customerService : CustomerService ,
    private dialog: MatDialog,
    private notificationService: NotificationService, 
    private dialogService: DialogService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(data=>{
        this.customers=data;
      });
    
      this.customerService.getAllCustomers().subscribe(
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
        this.customerService.deleteCustomer(id).subscribe(result => {
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

}
