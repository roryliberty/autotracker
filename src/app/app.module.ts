import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VehicleEntryComponent } from './vehicle-entry/vehicle-entry.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleItemComponent } from './vehicle-list/vehicle-item/vehicle-item.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleEntryComponent,
    NavbarComponent,
    VehicleListComponent,
    VehicleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
