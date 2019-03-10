import { InvoicesComponent } from './menus/invoices/invoices.component';
import { MessagesComponent } from './menus/messages/messages.component';
import { ManageusersComponent } from './menus/manageusers/manageusers.component';
import { RegusersComponent } from './menus/regusers/regusers.component';
import { HomeComponent } from './menus/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemstatisticsComponent } from './menus/systemstatistics/systemstatistics.component';


const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'home' , component : HomeComponent},
  {path: 'registerUsers' , component : RegusersComponent},
  {path: 'manageUsers' , component : ManageusersComponent},
  {path: 'systemStatistics' , component : SystemstatisticsComponent},
  {path: 'invoices' , component: InvoicesComponent},
  {path: 'messages' ,component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
