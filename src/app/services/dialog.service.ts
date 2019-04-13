import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) { }
  openConfirmDialog(msg){
   return this.dialog.open(LoginComponent,{
      
      data :{
        message : msg
      }
    });
  }
}
