import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogService } from 'src/app/services/dialog.service';
import { SendMessageComponent } from 'src/app/menus/messages/send-message/send-message.component';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  notificationService : NotificationService;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private messageService:MessageService,
    private dialog:MatDialog
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.loginAdmin(this.form.value);
    }
    this.formSubmitAttempt = true;
  }

  backHome(){
    return this.router.navigate(['/userlogin']);
  }

  sendMessage(){
    this.messageService.populateForm({
      'sender':'',
      'reciever':'Admin',
      'message':'',
      'status':'0'
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(SendMessageComponent,dialogConfig);
  }
}
