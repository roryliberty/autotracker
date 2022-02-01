import { Component, Input, OnInit } from '@angular/core';
import { AutoModel } from "../auto.model";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  @Input('autoList') public loadedAutos: AutoModel[] = [];


  constructor() {

  }

  ngOnInit() {

  }
}
