import { Component, OnInit, Injectable, forwardRef } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { OrganizerService } from 'src/app/services/organizer.service';
import { Router } from '@angular/router';
import { VieworganizerComponent } from '../vieworganizer/vieworganizer.component';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})

export class OrganizerComponent implements OnInit {
  constructor(private service: OrganizerService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<OrganizerComponent>
  ) {}

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('id').value){
        this.service.updateOrganizer(this.service.form.value);
        console.log("Update");
        this.ngOnInit();
        this.notificationService.success(':: Update successfully.');

      }
      else{
        this.service.saveOrganizer(this.service.form.value);
        console.log("Insert");
        this.ngOnInit();
        this.notificationService.success(':: Successfully Added.');
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
