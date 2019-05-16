import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  public API = 'http://localhost:8080/trasher/api/message';

  sendMessage(message:any){
    return this.http.post(this.API,message);
  }

  getAllMessages(){
    return this.http.get(this.API);
  }

  getRead(){
    return this.http.get(this.API+"/read");
  }

  getUnread(){
    return this.http.get(this.API+"/unread");
  }

  deleteMessage(id:string){
    return this.http.delete(this.API+"/"+id);
  }
}
