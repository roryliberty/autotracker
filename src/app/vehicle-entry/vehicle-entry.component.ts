import { Component, OnInit } from '@angular/core';
import { AutoModel } from '../auto.model';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vehicle-entry',
  templateUrl: './vehicle-entry.component.html',
  styleUrls: ['./vehicle-entry.component.css']
})
export class VehicleEntryComponent implements OnInit {
  public loadedAutos: AutoModel[] = [];
  public form = {
    year: '',
    make: '',
    model: ''
  }

  constructor(private http: HttpClient,
              private httpService: HttpService) {
  }

  ngOnInit() {
    // Get list of vehicles from Firebase
    this.dataGetter();
  }

  onSubmit(auto: AutoModel) {
    // Post vehicle to Firebase
    this.httpService.postData(auto);
    // Clear form fields
    this.form.year = '';
    this.form.make = '';
    this.form.model = '';
  }

  onFetchData() {
    // Get list of vehicles from Firebase
    this.dataGetter();
  }

  onClear() {
    // Clear entire list of vehicles on Firebase
    this.httpService.clearData().subscribe(() => {
      // Set array to empty
      this.loadedAutos = [];
    });
  }

  private dataGetter() {
    // Get list of vehicles from Firebase
    this.httpService.getData().subscribe(posts => {
      // Save list of vehicles to array
      this.loadedAutos = posts;
    })
  }
}
