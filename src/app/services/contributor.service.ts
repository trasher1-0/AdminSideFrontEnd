import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  constructor(private http : HttpClient) { }

  getAllContributors(): Observable<any>{
    return this.http.get("http://localhost:8080/trasher/api/contributor");
  }
}
