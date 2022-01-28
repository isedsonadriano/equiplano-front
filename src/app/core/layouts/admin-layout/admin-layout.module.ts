import { CoreModule } from './../../core.module';

import { DashboardComponent } from './../../../pages/dashboard/dashboard.component';

import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";



import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent
  ],
  exports:[
    CoreModule
  ]
})
export class AdminLayoutModule {}