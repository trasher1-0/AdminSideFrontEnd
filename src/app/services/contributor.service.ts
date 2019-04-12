import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributorService {

  constructor(private http : HttpClient) { }

  public API = 'http://localhost:8080/trasher/api';
  public CONTRIBUTOR_API = this.API + '/contributor';


  getAllContributors(): Observable<any>{
    return this.http.get(this.CONTRIBUTOR_API);
  }

  getContributor(id: string) {
    return this.http.get(this.CONTRIBUTOR_API + '/' + id);
  }
  
  deleteContributor(id: string){
    return this.http.delete(this.CONTRIBUTOR_API + '/'+id);
  }
}
