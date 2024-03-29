import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleEntryComponent } from "./vehicle-entry/vehicle-entry.component";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import { VehicleDetailsComponent } from "./vehicle-details/vehicle-details.component";

const routes: Routes = [
  { path: 'vehicle-entry', component: VehicleEntryComponent },
  { path: 'vehicle-list', component: VehicleListComponent },
  { path: 'vehicle-details/:id', component: VehicleDetailsComponent},
  { path: '', redirectTo: '/vehicle-entry', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
