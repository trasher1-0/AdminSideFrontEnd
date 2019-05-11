import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrganizerService } from 'src/app/services/organizer.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { Observable } from 'rxjs';
import { Organizer } from 'src/app/services/organizer';
import { OrganizerComponent } from 'src/app/menus/manageusers/organizer/organizer.component';

@Component({
  selector: 'app-profile-org',
  templateUrl: './profile-org.component.html',
  styleUrls: ['./profile-org.component.scss']
})
export class ProfileOrgComponent implements OnInit {

  constructor(private authService: AuthService,
    private organizerService : OrganizerService ,
    private dialog: MatDialog,
    private notificationService: NotificationService,    
    private dialogService: DialogService) { }
  
  organizer$:Observable<Organizer>;
  user:Organizer;

  ngOnInit() {
    this.organizer$ = this.authService.getUserOrg;
    this.organizer$.subscribe(data=>{
      this.user=data;
    });
  }

  onEdit(row){
    console.log(row);
    this.organizerService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(OrganizerComponent,dialogConfig);
  }

}
