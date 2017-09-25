import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { LoginComponent } from "./auth/login.component";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { RoleComponent } from "./role/role.component";

const appRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'dashboard', 
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'settings', 
        component: SettingsComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'admin', 
        component: AdminComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users', 
        component: UserComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'roles', 
        component: RoleComponent,
        canActivate: [AuthGuard],
    },
    { 
        path: '', 
        redirectTo: '/dashboard', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        component: PageNotFoundComponent 
    }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }