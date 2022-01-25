import { Component } from '@angular/core';
import { AutoModel } from "./auto.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedAutos: AutoModel[] = [];

  onSubmit(autoData: AutoModel) {
    // Save form data to loadedAutos array
    this.loadedAutos.push(autoData)
  }
}
