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

  public form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    image: new FormControl('',Validators.required)
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

  getMyRobot(id:string){
    return this.http.get(this.ROBOT_API + '/cont/' + id)
  }

  deleteRobot(id: string){
    return this.http.delete(this.ROBOT_API + '/'+id);
  }

  setRobotCont(robot:any){
    return this.http.put(this.ROBOT_API+'/cont/add/'+robot.id,robot);
  }

  saveRobot(robot: Robot,selectedFile: File){
    const sd = new FormData();
    sd.append('file',selectedFile,selectedFile.name);
    const rob={
      "name":robot.name,
      "details":robot.details,
      "image":selectedFile.name
    }
    console.log("Return");
    return this.http.post(this.ROBOT_API, rob).subscribe() && 
    this.http.post(this.API+"/file/upload",sd).subscribe();
    // this.http.post('http://localhost:8080/trasher/api/file/upload',sd).subscribe();
  }

  updateRobot(robot : any) {
    return this.http.put(this.ROBOT_API+'/'+robot.id,robot).subscribe();
  }

  populateForm(robot: Robot) {
    this.form.setValue(robot);
  }

  getCount(): Observable<any>{
    return this.http.get(this.ROBOT_API+"/count");
  }
}
