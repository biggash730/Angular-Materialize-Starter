import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";

interface IMenuItem {
  label: string
  route: string
  icon: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menus: IMenuItem[];
  username: string;
  email: string;
  loading: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.setMenuItems();
    this.setUsername();
  }

  isLoggedIn() {
    this.setUsername();
    return this.authService.isLoggedIn();
  }

  setUsername() {
    let user = this.authService.currentUser;
    if (user) {
      this.username = user.name;
      this.email = user.email
    }
  }

  logout() {
    this.loading = true;
    this.authService.invalidate().subscribe((res) => {
      if (res.success) {
        this.authService.removeUser();
        this.router.navigate(['/login']);
      }
    });
  }

  private setMenuItems() {
    this.menus = [
      { label: "Dashboard", route: "/dashboard", icon: "fa fa-dashboard fa-lg" },
      { label: "Settings", route: "/settings", icon: "fa fa-cogs fa-lg" },
      { label: "Admin", route: "/admin", icon: "fa fa-key fa-lg" },
      { label: "Users", route: "/users", icon: "fa fa-users fa-lg" },
      { label: "Roles", route: "/roles", icon: "fa fa-cubes fa-lg" }
    ];
  }
}
