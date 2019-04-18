import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  public API = 'http://localhost:8080/trasher/api';
  public ADMIN_API = this.API + '/admin';


  getAllAdmins(): Observable<any>{
    return this.http.get(this.ADMIN_API);
  }

  getAdmin(id: string) {
    return this.http.get(this.ADMIN_API + '/' + id);
  }

  deleteAdmin(id: string){
    return this.http.delete(this.ADMIN_API + '/'+id);
  }

  saveAdmin(admin: any): Observable<any> {
    let result: Observable<Object>;
    if (admin['href']) {
      result = this.http.put(admin.href, admin);
    } else {
      result = this.http.post(this.ADMIN_API, admin);
    }
    return result;
  }
}
