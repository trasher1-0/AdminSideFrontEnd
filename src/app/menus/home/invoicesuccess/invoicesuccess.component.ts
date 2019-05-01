import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { CustomerService } from 'src/app/services/customer.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-invoicesuccess',
  templateUrl: './invoicesuccess.component.html',
  styleUrls: ['./invoicesuccess.component.scss']
})
export class InvoicesuccessComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  customers: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['invoiceno', 'username', 'fullname', 'address','city','mobile','email','date','timeperiod','actions'];
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;

  constructor(
    private customerService : CustomerService ,
    private dialog: MatDialog,
    private notificationService: NotificationService, 
    private dialogService: DialogService) { }

  ngOnInit() {
    this.customerService.getCompleteCustomers().subscribe(data=>{
        this.customers=data;
      });
    
      this.customerService.getCompleteCustomers().subscribe(
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
