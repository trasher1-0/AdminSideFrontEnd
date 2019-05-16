import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contributor } from 'src/app/services/contributor';
import { AuthService } from 'src/app/services/auth.service';
import { ContributorService } from 'src/app/services/contributor.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { ContributorComponent } from 'src/app/menus/manageusers/contributor/contributor.component';

@Component({
  selector: 'app-profile-con',
  templateUrl: './profile-con.component.html',
  styleUrls: ['./profile-con.component.scss']
})
export class ProfileConComponent implements OnInit {

  constructor(private authService: AuthService,
    private contributorService : ContributorService ,
    private dialog: MatDialog,
    private notificationService: NotificationService,    
    private dialogService: DialogService) { }
  
  user:any;

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('usercon'));
  }

  onEdit(row){
    console.log(row);
    this.contributorService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ContributorComponent,dialogConfig).afterClosed().subscribe(result=>{
      this.refresh();
    })
  }
  refresh(){
    this.user=JSON.parse(localStorage.getItem('usercon'));
  }

}
