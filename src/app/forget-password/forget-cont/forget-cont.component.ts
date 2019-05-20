import { Component, OnInit } from '@angular/core';
import { PasswordService } from 'src/app/services/password.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-forget-cont',
  templateUrl: './forget-cont.component.html',
  styleUrls: ['./forget-cont.component.scss']
})
export class ForgetContComponent implements OnInit {

  constructor(private service: PasswordService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<ForgetContComponent>,
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
        this.service.getContributor(this.service.form.get('email').value).subscribe(data=>{
          if(data['id']==null){
            this.notificationService.warn("You are not a registered Contributor!");
          }
          else{
            const user={
              'reciever':data['email'],
              'subject':"Trasher Contributor Forget Password",
              'body':"Username : "+data['username']+", password : "+data['password']
            }
            this.emailService.sendMail(user).subscribe(data=>{
              console.log(data['error']['text']);
            });
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
