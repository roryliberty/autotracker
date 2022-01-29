import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleEntryComponent } from "./vehicle-entry/vehicle-entry.component";

const routes: Routes = [
  { path: 'vehicle-entry', component: VehicleEntryComponent },
  { path: '', redirectTo: '/vehicle-entry', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
