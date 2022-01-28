import { Component, OnInit } from '@angular/core';
import { AutoModel } from "./auto.model";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Building the form
  autoForm = this.fb.group({
    year: [''],
    make: [''],
    model: ['']
  })
  loadedAutos: AutoModel[] = [];

  constructor(private fb: FormBuilder,
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
    this.autoForm.reset();
  }

  onFetchData() {
    this.dataGetter();
  }

  onClear() {
    // Clear form fields
    this.autoForm.reset();
    // Clear loadedAutos array
    this.loadedAutos.splice(0);
  }

  private dataGetter() {
    this.httpService.getData().subscribe(posts => {
      this.loadedAutos = posts;
    })
  }
}
