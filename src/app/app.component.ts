import { Component, OnInit } from '@angular/core';
import { AutoModel } from "./auto.model";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

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
              private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchData();
  }

  onSubmit(auto: AutoModel) {
    // Send Http request
    this.http.post("https://autotracker-da6d9-default-rtdb.firebaseio.com/posts.json", auto)
      .subscribe(posts => {
        // Log the response data to the console
        console.log(posts);
      });
    // Clear form fields
    this.autoForm.reset();
    // log to console
    console.log(this.loadedAutos);
  }

  onFetchData() {
    this.fetchData();
  }

  onClear() {
    // Clear form fields
    this.autoForm.reset();
    // Clear loadedAutos array
    this.loadedAutos.splice(0);
    // log to console
    console.log(this.loadedAutos);
  }

  private fetchData() {
    // Send Http request
    this.http.get<{ [key: string]: AutoModel }>("https://autotracker-da6d9-default-rtdb.firebaseio.com/posts.json")
      .pipe(
        map((responseData: { [key: string]: any })  => {
          const dataArray: AutoModel[] = [];
          for(const key in responseData) {
            if(responseData.hasOwnProperty(key)) {
              dataArray.push({ ...responseData[key], id: key });
            }
          }
          return dataArray;
        })
      )
      .subscribe(posts => {
        // ...
        this.loadedAutos = posts;
    });
  }
}
