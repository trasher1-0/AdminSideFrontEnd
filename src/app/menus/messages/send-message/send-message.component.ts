import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  constructor(private service: MessageService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<SendMessageComponent>,
  ) {}

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (this.service.form.get('message').value){
        console.log(this.service.form.value);
        this.service.sendMessage(this.service.form.value).subscribe(data=>{
          console.log(data);
        });
        this.notificationService.success("Email sent!");
        this.onClose()
      }
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
