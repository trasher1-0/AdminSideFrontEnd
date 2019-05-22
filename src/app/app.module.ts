import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatPaginator, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatExpansionModule, MatTabsModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { WebcamModule } from 'ngx-webcam';
import 'hammerjs';

import { MainNavComponent } from './inc/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './menus/home/home.component';
import { ManageusersComponent } from './menus/manageusers/manageusers.component';
import { SystemstatisticsComponent } from './menus/systemstatistics/systemstatistics.component';
import { InvoicesComponent } from './menus/invoices/invoices.component';
import { MessagesComponent } from './menus/messages/messages.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ViewcontributorComponent } from './menus/manageusers/viewcontributor/viewcontributor.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { VieworganizerComponent } from './menus/manageusers/vieworganizer/vieworganizer.component';
import { FormsModule, ControlContainer, ReactiveFormsModule } from '@angular/forms';
import { OrganizerComponent } from './menus/manageusers/organizer/organizer.component';
import { ContributorService } from './services/contributor.service';
import { OrganizerService } from './services/organizer.service';
import { DatePipe } from '@angular/common';
import { Contributor } from './services/contributor';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminService } from './services/admin.service';
import { ManagerobotComponent } from './menus/managerobot/managerobot.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { RobotComponent } from './menus/managerobot/robot/robot.component';
import { RobotService } from './services/robot.service';
import { ContributorComponent } from './menus/manageusers/contributor/contributor.component';
import { CustomerComponent } from './menus/home/customer/customer.component';
import { InvoicesuccessComponent } from './menus/home/invoicesuccess/invoicesuccess.component';
import { EmailComponent } from './menus/home/customer/email/email.component';
import { NavContributorComponent } from './inc/nav-contributor/nav-contributor.component';
import { HomeConComponent } from './contributormenu/home-con/home-con.component';
import { ContloginComponent } from './userlogin/contlogin/contlogin.component';
import { AdminloginComponent } from './userlogin/adminlogin/adminlogin.component';
import { HomeOrgComponent } from './organizermenu/home-org/home-org.component';
import { OrgloginComponent } from './userlogin/orglogin/orglogin.component';
import { ManagecontributorComponent } from './organizermenu/managecontributor/managecontributor.component';
import { MonthUsageComponent } from './reports/month-usage/month-usage.component';
import { ReportService } from './services/report.service';
import { NotificationService } from './services/notification.service';
import { DonutChartComponent } from './reports/donut-chart/donut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { UserCountComponent } from './reports/user-count/user-count.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileConComponent } from './contributormenu/home-con/profile-con/profile-con.component';
import { ProfileOrgComponent } from './organizermenu/home-org/profile-org/profile-org.component';
import { EmailService } from './services/email.service';
import { ForumMessageComponent } from './menus/messages/forum-message/forum-message.component';
import { SendMessageComponent } from './menus/messages/send-message/send-message.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ForgetContComponent } from './forget-password/forget-cont/forget-cont.component';

import { environment } from '../environments/environment';
import { AgmCoreModule} from '@agm/core';
import { MapComponent } from './map/map.component';
import { AngularFireModule } from '@angular/fire';

const firebaseconfig=environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ManageusersComponent,
    SystemstatisticsComponent,
    InvoicesComponent,
    MessagesComponent,
    LoginComponent,
    AdminComponent,
    ViewcontributorComponent,
    ConfirmComponent,
    VieworganizerComponent,
    OrganizerComponent,
    UserloginComponent,
    ManagerobotComponent,
    RobotComponent,
    ContributorComponent,
    CustomerComponent,
    InvoicesuccessComponent,
    EmailComponent,
    NavContributorComponent,
    HomeConComponent,
    ContloginComponent,
    AdminloginComponent,
    HomeOrgComponent,
    OrgloginComponent,
    ManagecontributorComponent,
    MonthUsageComponent,
    DonutChartComponent,
    UserCountComponent,
    PagenotfoundComponent,
    ProfileConComponent,
    ProfileOrgComponent,
    ForumMessageComponent,
    SendMessageComponent,
    ForgetPasswordComponent,
    ForgetContComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgMatSearchBarModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTabsModule,
    MatDialogModule,
    WebcamModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AgmCoreModule.forRoot({
      apiKey:environment.googleMapsKey
    })
  ],
  
  providers: [ContributorService,
    OrganizerService,AdminService,DatePipe,
    AuthService,RobotService, AuthGuard,ReportService,NotificationService,EmailService],
  bootstrap: [AppComponent],
  entryComponents:[OrganizerComponent,LoginComponent,RobotComponent,ContributorComponent,EmailComponent,
  SendMessageComponent,ForgetContComponent,ForgetPasswordComponent]
})
export class AppModule { }