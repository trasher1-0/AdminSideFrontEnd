import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendMail(data){
    return this.http.post('http://localhost:8080/trasher/api/sendMail',data);
  }
}
