import { Component, OnInit } from '@angular/core';
import { AutoModel } from '../auto.model';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private httpService: HttpService) {
  }

  ngOnInit() {
    this.dataGetter();
  }

  onSubmit(auto: AutoModel) {
    // To http.service.ts
    this.httpService.postData(auto);
    // Clear form fields
    this.form.year = '';
    this.form.make = '';
    this.form.model = '';
  }

  onFetchData() {
    this.dataGetter();
  }

  onClear() {
    // Clear entire db
    this.httpService.clearData().subscribe(() => {
      // Set array to empty
      this.loadedAutos = [];
    });
  }

  private dataGetter() {
    this.httpService.getData().subscribe(posts => {
      this.loadedAutos = posts;
    })
  }
}
