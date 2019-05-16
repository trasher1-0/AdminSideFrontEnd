import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.scss']
})
export class ForumMessageComponent implements OnInit {

  constructor(private messageService:MessageService,
    private notificationService:NotificationService) { }

  messagesUnread;
  messagesRead;
  readEmpty=false;
  unreadEmpty=false;

  ngOnInit() {
    this.messageService.getUnread().subscribe(data=>{
      this.messagesUnread=data;
      //console.log(this.messagesUnread);
    })

    this.messageService.getRead().subscribe(data=>{
      this.messagesRead=data;
      //console.log(this.messagesRead);
    })

    if(this.messagesRead==[]){
      this.readEmpty=true;
    }

    if(this.messagesUnread==[]){
      this.unreadEmpty=true;
    }
  }

  remove(id){
    this.messageService.deleteMessage(id).subscribe(data=>{
      this.notificationService.warn("Successfully deleted!");
    });
  }

}
