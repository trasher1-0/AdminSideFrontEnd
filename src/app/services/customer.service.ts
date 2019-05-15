import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) { }
  public API = 'http://localhost:8080/trasher/api';
  public CUSTOMER_API = this.API + '/customer';

  form: FormGroup = new FormGroup({
    reciever: new FormControl('',[Validators.required,Validators.email]),
    subject:new FormControl('',[Validators.required]),
    body: new FormControl('',Validators.required)

  });

  initializeFormGroup() {
    this.form.setValue({
      reciever: '',
      subject:'',
      body: ''
    });
  }


  getAllCustomers(): Observable<any>{
    return this.http.get(this.CUSTOMER_API);
  }

  getPendingCustomers(): Observable<any>{
    return this.http.get(this.CUSTOMER_API+'/pending');
  }

  getCompleteCustomers(): Observable<any>{
    return this.http.get(this.CUSTOMER_API+'/complete');
  }

  getCustomer(id: string) {
    return this.http.get(this.CUSTOMER_API + '/' + id);
  }

  deleteCustomer(id: string){
    return this.http.delete(this.CUSTOMER_API + '/'+id);
  }

  saveCustomer(customer: any){
    return this.http.post(this.CUSTOMER_API, customer).subscribe();
  }

  updateCustomer(customer : any) {
    return this.http.put(this.CUSTOMER_API+'/'+customer.id,customer).subscribe();
  }

  populateForm(customer: any) {
    this.form.setValue(customer);
  }

  getCountComplete(): Observable<any>{
    return this.http.get(this.CUSTOMER_API+"/countSuccess");
  }

  getCountPending(): Observable<any>{
    return this.http.get(this.CUSTOMER_API+"/countPending");
  }
}
