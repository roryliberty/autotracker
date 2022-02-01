import {Component, OnInit} from '@angular/core';
import {AutoModel} from "./auto.model";
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loadedAutos: AutoModel[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.dataGetter();
  }

  private dataGetter() {
    // Get list of vehicles from Firebase
    this.httpService.getData().subscribe(posts => {
      // Save list of vehicles to array
      this.loadedAutos = posts;
    })
  }
}
