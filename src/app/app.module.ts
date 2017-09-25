import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, DataTableModule, SharedModule, PaginatorModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { PageHeaderComponent } from "./shared/page-header/page-header.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from "./app-routing.module";
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from "./page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { LoginComponent } from './auth/login.component';
import { AuthService } from "./auth/auth.service";
import { AdminComponent } from './admin/admin.component';
import { Interceptor } from "./shared/interceptor";
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    DashboardComponent,
    SettingsComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule, DataTableModule, SharedModule, PaginatorModule
  ],
  providers: [
    AuthGuard,
    AuthService, 
    {provide: 'baseApi', useValue: 'api'},
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
