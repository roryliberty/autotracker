import {Component, Input, OnInit} from '@angular/core';
import { AutoModel } from '../auto.model';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vehicle-entry',
  templateUrl: './vehicle-entry.component.html',
  styleUrls: ['./vehicle-entry.component.css'],
})
export class VehicleEntryComponent implements OnInit {
  @Input('autoList') public loadedAutos: AutoModel[] = [];
  public form = {
    year: '',
    make: '',
    model: ''
  }
  public showList: boolean = false;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {

  }

  /**
   * Post vehicle to Firebase and clear form fields
   */
  onSubmit(auto: AutoModel) {
    // Post vehicle to Firebase
    this.httpService.postData(auto);
    // Clear form fields
    this.form.year = '';
    this.form.make = '';
    this.form.model = '';
  }

  /**
   * Show vehicle-list component
   */
  onFetchData() {
    this.showList = true;
  }

  onClear() {
    // Clear entire list of vehicles on Firebase
    this.httpService.clearData().subscribe(() => {
      // Set array to empty
      this.loadedAutos = [];
    });
    this.showList = false;
  }
}
