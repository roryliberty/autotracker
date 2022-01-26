import { Component } from '@angular/core';
import { AutoModel } from "./auto.model";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  onSubmit(auto: AutoModel) {
    // Send Http request
    this.http.post("https://autotracker-da6d9-default-rtdb.firebaseio.com/posts.json", auto)
      .subscribe(posts => {
        // Log the response data to the console
        console.log(posts);
      });
    // Save form data to loadedAutos array
    this.loadedAutos.push(auto);
    // Clear form fields
    this.autoForm.reset();
    // log to console
    console.log(this.loadedAutos);
  }

  onClear() {
    // Clear form fields
    this.autoForm.reset();
    // Clear loadedAutos array
    this.loadedAutos.splice(0);
    // log to console
    console.log(this.loadedAutos);
  }
}
