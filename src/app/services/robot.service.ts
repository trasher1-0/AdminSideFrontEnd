import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Robot } from './robot';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor(private http : HttpClient) { }

  public API = 'http://localhost:8080/trasher/api';
  public ROBOT_API = this.API + '/robot';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    image: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      details: '',
      image: ''
    });
  }


  getAllrobots(): Observable<any>{
    return this.http.get(this.ROBOT_API);
  }

  getRobot(id: string) {
    return this.http.get(this.ROBOT_API + '/' + id);
  }

  deleteRobot(id: string){
    return this.http.delete(this.ROBOT_API + '/'+id);
  }

  saveRobot(robot: any){
    console.log(robot);
    return this.http.post(this.ROBOT_API, robot).subscribe();
  }

  updateRobot(robot : any) {
    return this.http.put(this.ROBOT_API+'/'+robot.id,robot).subscribe();
  }

  

  populateForm(robot: Robot) {
    this.form.setValue(robot);
  }
}