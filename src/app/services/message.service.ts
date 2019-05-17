import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './message';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  public API = 'http://localhost:8080/trasher/api/message';

  form: FormGroup = new FormGroup({
    sender:new FormControl('',[Validators.required,Validators.email]),
    reciever: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
    status: new FormControl('',Validators.required)

  });

  initializeFormGroup() {
    this.form.setValue({
      sender:'',
      reciever:'',
      message:'',
      status:''
    });
  }

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

  populateForm(message: any) {
    this.form.setValue(message);
  }
}
