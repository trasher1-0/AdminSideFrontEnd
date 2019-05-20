import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { PasswordService } from '../services/password.service';
import { MatDialogRef } from '@angular/material';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private service: PasswordService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ForgetPasswordComponent>,
    private emailService:EmailService
  ) {}

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('email').value){
        console.log(this.service.form.value);
        this.service.getOrganizer(this.service.form.get('email').value).subscribe(data=>{
          if(data['id']==null){
            this.notificationService.warn("You are not a registered Organizer!");
          }
          else{
            const user={
              'reciever':data['email'],
              'subject':"Trasher Organizer Forget Password",
              'body':"Your password is : "+data['password']
            }
            this.emailService.sendMail(user);
            this.notificationService.success("Password will recieved to your email!");
            this.onClose()
          }
        });
        
      }
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
