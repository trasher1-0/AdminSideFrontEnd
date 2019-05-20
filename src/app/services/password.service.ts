import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http:HttpClient) { }

  orgAPI="http://localhost:8080/trasher/api/forget/org";
  contAPI="http://localhost:8080/trasher/api/forget/org";

  getContributor(email){
    return this.http.post(this.contAPI,{
      'email':email
    });
  }

  getOrganizer(email){
    return this.http.post(this.orgAPI,{
      'email':email
    });
  }
}
