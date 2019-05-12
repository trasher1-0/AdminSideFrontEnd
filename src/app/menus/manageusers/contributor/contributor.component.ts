import { Component, OnInit } from '@angular/core';
import { ContributorService } from 'src/app/services/contributor.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.scss']
})
export class ContributorComponent implements OnInit {

  constructor(private service: ContributorService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ContributorComponent>
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
        this.service.updateContributor(this.service.form.value);
        console.log("Update");
        this.ngOnInit();
        this.notificationService.success(':: Update successfully.');
        localStorage.setItem('usercont',JSON.stringify(this.service.getContributor(this.service.form.get('id').value)));

      }
      else{
        this.service.saveContributor(this.service.form.value);
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
