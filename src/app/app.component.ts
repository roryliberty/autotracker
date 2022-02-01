import { Component, OnInit } from '@angular/core';
import { AutoModel } from "./auto.model";
import { HttpService } from "./http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService,]
})
export class AppComponent implements OnInit {
  public loadedAutos: AutoModel[] = [];
  public show: boolean = false;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    // Get list of vehicles and display
    this.dataGetter();
  }

  private dataGetter() {
    // Get list of vehicles from Firebase
    this.httpService.getData().subscribe(posts => {
      // Save list of vehicles to array
      this.loadedAutos = posts;
      console.log('app-component loadedAutos: ' + this.loadedAutos.length);
    })
  }
}
