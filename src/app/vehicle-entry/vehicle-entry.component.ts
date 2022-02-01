import { Component, Input } from '@angular/core';
import { AutoModel } from '../auto.model';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vehicle-entry',
  templateUrl: './vehicle-entry.component.html',
  styleUrls: ['./vehicle-entry.component.css']
})
export class VehicleEntryComponent {
  @Input('autoList') public loadedAutos: AutoModel[] = [];
  public form = {
    year: '',
    make: '',
    model: ''
  }

  constructor(private http: HttpClient,
              private httpService: HttpService) {
  }

  onSubmit(auto: AutoModel) {
    // Post vehicle to Firebase
    this.httpService.postData(auto);
    // Clear form fields
    this.form.year = '';
    this.form.make = '';
    this.form.model = '';
    // log to console
    console.log(this.loadedAutos);
  }

  // TODO: What do I do with onFetchData here?
  onFetchData() {

  }

  onClear() {
    // Clear entire list of vehicles on Firebase
    this.httpService.clearData().subscribe(() => {
      // Set array to empty
      this.loadedAutos = [];
    });
  }
}
