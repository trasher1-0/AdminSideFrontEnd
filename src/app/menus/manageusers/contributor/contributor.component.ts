import { Component, OnInit } from '@angular/core';
import { ContributorService } from 'src/app/services/contributor.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contributor',
  templateUrl: './contributor.component.html',
  styleUrls: ['./contributor.component.scss']
})
export class ContributorComponent implements OnInit {

  constructor(private service: ContributorService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ContributorComponent>,
    private authService:AuthService
  ) {}

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      const user={
        "email":this.service.form.get('email').value,
        "username":this.service.form.get('username').value
      }
      this.authService.checkContUser(user).subscribe(data=>{

        if(data['id']!=null){
          this.notificationService.warn('Email or username already exists!');
        }else{
          if (this.service.form.get('id').value){
            this.service.updateContributor(this.service.form.value);
            console.log("Update");
            this.ngOnInit();
            this.notificationService.success(':: Update successfully.');
            this.service.getContributor(this.service.form.get('id').value).subscribe(data=>{
              localStorage.setItem('usercont',JSON.stringify(data));
            });
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
      })
      
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
