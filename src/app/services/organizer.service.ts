import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {

  constructor(private http : HttpClient) { }

  public API = 'http://localhost:8080/trasher/api';
  public ORGANIZER_API = this.API + '/organizer';


  getAllOrganizers(): Observable<any>{
    return this.http.get(this.ORGANIZER_API);
  }

  getOrganizer(id: string) {
    return this.http.get(this.ORGANIZER_API + '/' + id);
  }

  deleteOrganizer(id: string){
    return this.http.delete(this.ORGANIZER_API + '/'+id);
  }

  saveOrganizer(organizer: any): Observable<any> {
    let result: Observable<Object>;
    if (organizer['href']) {
      result = this.http.put(organizer.href, organizer);
    } else {
      result = this.http.post(this.ORGANIZER_API, organizer);
    }
    return result;
  }
}
