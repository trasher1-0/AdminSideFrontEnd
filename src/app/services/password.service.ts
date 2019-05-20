import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http:HttpClient) { }

  orgAPI="http://localhost:8080/trasher/api/forget/org";
  contAPI="http://localhost:8080/trasher/api/forget/org";

  form: FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email])
  });

  initializeFormGroup() {
    this.form.setValue({
      email:''
    });
  }

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

  populateForm(message: any) {
    this.form.setValue(message);
  }

}
