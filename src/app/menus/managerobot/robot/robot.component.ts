import { Component, OnInit } from '@angular/core';
import { RobotService } from 'src/app/services/robot.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.scss']
})
export class RobotComponent implements OnInit {

  constructor(private service: RobotService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<RobotComponent>,

  ) {}

  fileData: File = null;

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
  
  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    const sd = new FormData();
    sd.append('image',this.selectedFile,this.selectedFile.name);
    if (this.service.form.valid) {
      if (this.service.form.get('id').value){
        this.service.updateRobot(this.service.form.value);
        console.log("Update");
        this.ngOnInit();
        this.notificationService.success(':: Update successfully.');

      }
      else{
        this.service.saveRobot(this.service.form.value);
        console.log("Insert");
        this.ngOnInit();
        this.notificationService.success(':: Successfully Added.');
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  url: string;
  selectedFile:File = null;

  onSelectFile(event) { // called each time file input changes
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = <File>event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target['result'];
      }
    }
  }

}
