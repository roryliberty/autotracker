import { Component, ViewChild } from '@angular/core';
import { AutoModel } from "./auto.model";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autoForm = this.fb.group({
    year: [''],
    make: [''],
    model: ['']
  })
  loadedAutos: AutoModel[] = [];

  constructor(private fb: FormBuilder) {
  }

  onSubmit(auto: AutoModel) {
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
