import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles = [
    {"name": "Oboi", "notes": "Oboi", "permissions": 4},
    {"name": "Bobo", "notes": "Oboi", "permissions":12},
    {"name": "Ratti", "notes": "Oboi", "permissions": 5},
    {"name": "Fred", "notes": "Oboi", "permissions": 9}
  ]

  constructor() { }

  ngOnInit() {
  }

}
