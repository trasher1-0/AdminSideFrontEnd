import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http : HttpClient) { }
  public API = 'http://localhost:8080/trasher/api';
  public REPORT_API = this.API + '/reportinvoices';


  getInvoices(): Observable<any>{
    return this.http.get(this.REPORT_API);
  }
}
