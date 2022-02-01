import { Component, Input } from '@angular/core';
import { AutoModel } from "../auto.model";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent {
  @Input('autoList') public listLoadedAutos: AutoModel[] = [];
}
