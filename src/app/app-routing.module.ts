
import { InvoicesComponent } from './menus/invoices/invoices.component';
import { MessagesComponent } from './menus/messages/messages.component';
import { ManageusersComponent } from './menus/manageusers/manageusers.component';
import { HomeComponent } from './menus/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemstatisticsComponent } from './menus/systemstatistics/systemstatistics.component';
import { AdminComponent } from './admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ManagerobotComponent } from './menus/managerobot/managerobot.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeConComponent } from './contributormenu/home-con/home-con.component';
import { ContloginComponent } from './userlogin/contlogin/contlogin.component';
import { HomeOrgComponent } from './organizermenu/home-org/home-org.component';
import { ManagecontributorComponent } from './organizermenu/managecontributor/managecontributor.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RobotComponent } from './menus/managerobot/robot/robot.component';

const routes: Routes = [
  
  {path: 'userlogin' , component: UserloginComponent},

  { path: 'admin' , 
    component : AdminComponent,
    canActivate: [AuthGuard],
    //data: { roles: [Role.Admin] }
  },

  { path: 'manageRobot' , 
    component : ManagerobotComponent,
    canActivate: [AuthGuard],
    //data: { roles: [Role.Admin] }
  },

  { path: 'manageUsers' , 
    component : ManageusersComponent,
    canActivate: [AuthGuard],
    //data: { roles: [Role.Admin] }
  },

  { path: 'systemStatistics' , 
    component : SystemstatisticsComponent,
    canActivate: [AuthGuard],
    //data: { roles: [Role.Admin] }
  },

  { path: 'invoices' , 
    component : InvoicesComponent,
    canActivate: [AuthGuard],
    //data: { roles: [Role.Admin] }
  },

  { path: 'messages' , 
    component : MessagesComponent,
    canActivate: [AuthGuard],
    //data: { roles: [Role.Admin] }
  },

  {path: 'home' , component : HomeComponent,
  canActivate: [AuthGuard],
  },

  {path: 'contributor/home' , component : HomeConComponent,
  canActivate: [AuthGuard],
  },

  {path: 'contributor/invoices' , component : InvoicesComponent,
  canActivate: [AuthGuard],
  },

  {path: 'contributor/robotLiveFeed' , component : SystemstatisticsComponent,
  canActivate: [AuthGuard],
  },

  {path: 'organizer/home' , component : HomeOrgComponent,
  canActivate: [AuthGuard],
  },

  {path: 'organizer/managecontributor' , component : ManagecontributorComponent,
  canActivate: [AuthGuard],
  },

  {path: 'organizer/invoices' , component : InvoicesComponent,
  canActivate: [AuthGuard],
  },

  {path: 'contlogin' , component : ContloginComponent,
  canActivate: [AuthGuard],
  },

  {path: '' , redirectTo: 'userlogin', pathMatch: 'full'},

  {
    path: '**',
    component:PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
