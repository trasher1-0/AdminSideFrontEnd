import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Contributor } from './contributor';
import { ViewcontributorComponent } from '../menus/manageusers/viewcontributor/viewcontributor.component';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  constructor(private http : HttpClient) { }
  public API = 'http://localhost:8080/trasher/api';
  public CONTRIBUTOR_API = this.API + '/contributor';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('',Validators.required),
    mobile: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      username: '',
      fullname: '',
      address: '',
      city: '',
      mobile: '',
      email: '',
      password: ''
    });
  }


  getAllContributors(): Observable<any>{
    return this.http.get(this.CONTRIBUTOR_API);
  }

  getContributor(id: string) {
    return this.http.get(this.CONTRIBUTOR_API + '/' + id);
  }

  deleteContributor(id: string){
    return this.http.delete(this.CONTRIBUTOR_API + '/'+id);
  }

  saveContributor(contributor: any){
    return this.http.post(this.CONTRIBUTOR_API, contributor).subscribe();
  }

  updateContributor(contributor : any) {
    return this.http.put(this.CONTRIBUTOR_API+'/'+contributor.id,contributor).subscribe();
  }

  populateForm(contributor: Contributor) {
    this.form.setValue(contributor);
  }
}
