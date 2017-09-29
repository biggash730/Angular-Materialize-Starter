import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ButtonModule, DataTableModule, SharedModule, PaginatorModule, DialogModule, DropdownModule, BlockUIModule } from 'primeng/primeng';

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
import { RoleService } from './role/role.service';
import { UserService } from './user/user.service';
import { LoadingComponent } from './shared/loading.component';
import { GeneralLookupComponent } from './settings/general-lookup/general-lookup.component';
import { SettingsService } from './settings/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LoadingComponent,
    DashboardComponent,
    SettingsComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    RoleComponent,
    GeneralLookupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule, DataTableModule, SharedModule, PaginatorModule, DialogModule, DropdownModule, BlockUIModule
  ],
  providers: [
    {provide: 'baseApi', useValue: 'api'},
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    AuthGuard,
    AuthService,
    RoleService,
    UserService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
