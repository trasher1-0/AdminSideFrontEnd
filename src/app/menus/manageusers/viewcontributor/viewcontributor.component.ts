import { Component, OnInit, Inject } from '@angular/core';
import { ContributorService } from '../../../services/contributor.service';
import { MatDialog } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-viewcontributor',
  templateUrl: './viewcontributor.component.html',
  styleUrls: ['./viewcontributor.component.scss']
})
export class ViewcontributorComponent implements OnInit {

  contributors: Array<any>;
  constructor(
    private contributorService : ContributorService ,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService) { }

  ngOnInit() {
    this.contributorService.getAllContributors().subscribe(data=>{
        this.contributors=data;
      });
  }

  remove(id:string){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.contributorService.deleteContributor(id).subscribe(result => {
        }, error => console.error(error));  
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }
}
