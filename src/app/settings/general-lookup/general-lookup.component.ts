import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { LookUps } from '../settings.service';

@Component({
  selector: 'app-general-lookup',
  templateUrl: './general-lookup.component.html',
  styleUrls: ['./general-lookup.component.css']
})
export class GeneralLookupComponent implements OnInit {

  modelName: string;
  model: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.modelName = this.activatedRoute.snapshot.paramMap.get('model');
    this.model = LookUps.models.find(model => model.name === this.modelName)
  }

}
