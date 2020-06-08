import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
  DashboardComponent],
  imports: [
    DashboardRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: []
})
export class DashboardModule { }
