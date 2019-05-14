import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orglogin',
  templateUrl: './orglogin.component.html',
  styleUrls: ['./orglogin.component.scss']
})
export class OrgloginComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  notificationService : NotificationService;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.loginOrganizer(this.form.value);
    }
    this.formSubmitAttempt = true;
  }

  backHome(){
    return this.router.navigate(['/userlogin']);
  }

}
