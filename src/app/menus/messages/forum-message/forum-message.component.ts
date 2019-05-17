import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EmailComponent } from '../../home/customer/email/email.component';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.scss']
})
export class ForumMessageComponent implements OnInit {

  constructor(private messageService:MessageService,
    private notificationService:NotificationService,
    private dialogService:DialogService,
    private dialog: MatDialog,
    private customerService:CustomerService) { }

  messagesUnread;
  messagesRead;
  readEmpty=false;
  unreadEmpty=false;

  ngOnInit() {
    this.messageService.getUnread().subscribe(data=>{
      this.messagesUnread=data;
      if(this.messagesUnread.id==null){
        this.unreadEmpty=true;
      }     
      //console.log(this.unreadEmpty);
    })

    this.messageService.getRead().subscribe(data=>{
      this.messagesRead=data;
      if(this.messagesRead.id==null){
        this.readEmpty=true;
      }
      console.log(this.readEmpty);
    })
    
  }

  Reply(email){
    console.log(email.sender);
    this.customerService.populateForm({
      'reciever':email.sender,
      'subject':email.message,
      'body':''
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(EmailComponent,dialogConfig);
  }

  remove(id:string){
    this.dialogService.openConfirmDialog('Are you sure to delete this Message ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.messageService.deleteMessage(id).subscribe(result => {
        }, error => console.error(error));
        this.notificationService.warn('! Deleted successfully');   
      }
      this.refresh();
         
    });
  }

  refresh(){
    this.messageService.getUnread().subscribe(data=>{
      this.messagesUnread=data;
      if(this.messagesUnread.id==null){
        this.unreadEmpty=true;
      }     
      //console.log(this.unreadEmpty);
    })

    this.messageService.getRead().subscribe(data=>{
      this.messagesRead=data;
      if(this.messagesRead.id==null){
        this.readEmpty=true;
      }
      console.log(this.readEmpty);
    })
  }

}
