import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatPaginator, MatPaginatorModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatExpansionModule } from '@angular/material';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import 'hammerjs';

import { MainNavComponent } from './inc/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './menus/home/home.component';
import { RegusersComponent } from './menus/regusers/regusers.component';
import { ManageusersComponent } from './menus/manageusers/manageusers.component';
import { SystemstatisticsComponent } from './menus/systemstatistics/systemstatistics.component';
import { InvoicesComponent } from './menus/invoices/invoices.component';
import { MessagesComponent } from './menus/messages/messages.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegeventcontributorComponent } from './menus/regusers/regeventcontributor/regeventcontributor.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    RegusersComponent,
    ManageusersComponent,
    SystemstatisticsComponent,
    InvoicesComponent,
    MessagesComponent,
    LoginComponent,
    AdminComponent,
    RegeventcontributorComponent
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
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
