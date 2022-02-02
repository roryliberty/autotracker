import {Component, Input, OnDestroy} from '@angular/core';
import { AutoModel } from '../auto.model';
import { HttpService } from '../http.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vehicle-entry',
  templateUrl: './vehicle-entry.component.html',
  styleUrls: ['./vehicle-entry.component.css'],
})
export class VehicleEntryComponent implements OnDestroy {
  // TODO: Does the Input decorator need to be here?
  @Input('autoList') public entryLoadedAutos: AutoModel[] = [];
  /**
   * Structure of the form
   */
  public form = {
    year: '',
    make: '',
    model: ''
  }
  public activeSubscription: Subscription = new Subscription();

  constructor(private httpService: HttpService) {
  }

  ngOnDestroy() {
    this.activeSubscription.unsubscribe();
  }

  /**
   * Post vehicle to Firebase and clear form fields
   */
  onSubmit(auto: AutoModel) {
    // Post vehicle to Firebase
    this.httpService.postData(auto);
    // Clear form fields
    this.form.year = '';
    this.form.make = '';
    this.form.model = '';
  }

  /**
   * Get list of vehicles from Firebase
   * Update the table in vehicle-list template
   */
  onFetchData() {
    // Get list of vehicles from Firebase
      this.activeSubscription = this.httpService.getData().subscribe(posts => {
    // Save list of vehicles to array
        this.entryLoadedAutos = posts;
      });
  }

  /**
   * Clear entire list of vehicles on Firebase
   * Set entryLoadedAutos array to empty
   */
  onClear() {
    // Clear entire list of vehicles on Firebase
    this.httpService.clearData().subscribe(() => {
      // Set array to empty
      this.entryLoadedAutos = [];
    });
  }
}
