import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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
