import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Organizer } from './organizer';
import { VieworganizerComponent } from '../menus/manageusers/vieworganizer/vieworganizer.component';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  constructor(private http : HttpClient) { }
  public API = 'http://localhost:8080/trasher/api';
  public ORGANIZER_API = this.API + '/organizer';

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


  getAllOrganizers(): Observable<any>{
    return this.http.get(this.ORGANIZER_API);
  }

  getOrganizer(id: string) {
    return this.http.get(this.ORGANIZER_API + '/' + id);
  }

  deleteOrganizer(id: string){
    return this.http.delete(this.ORGANIZER_API + '/'+id);
  }

  saveOrganizer(organizer: any){
    return this.http.post(this.ORGANIZER_API, organizer).subscribe();
  }

  updateOrganizer(organizer : any) {
    return this.http.put(this.ORGANIZER_API+'/'+organizer.id,organizer).subscribe();
  }

  populateForm(organizer: Organizer) {
    this.form.setValue(organizer);
  }
}
