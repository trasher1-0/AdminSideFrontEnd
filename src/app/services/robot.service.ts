import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http : HttpClient) { }

  public API = 'http://localhost:8080/trasher/api';
  public ROBOT_API = this.API + '/robot';


  getAllrobots(): Observable<any>{
    return this.http.get(this.ROBOT_API);
  }

  getRobot(id: string) {
    return this.http.get(this.ROBOT_API + '/' + id);
  }

  deleteRobot(id: string){
    return this.http.delete(this.ROBOT_API + '/'+id);
  }

  saveRobot(robot: any): Observable<any> {
    let result: Observable<Object>;
    if (robot['href']) {
      result = this.http.put(robot.href, robot);
    } else {
      result = this.http.post(this.ROBOT_API, robot);
    }
    return result;
  }
}
