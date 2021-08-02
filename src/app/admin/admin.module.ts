import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';

import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [NavComponent, ProductFormComponent, TableComponent, DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    AdminRoutingModule,
    MaterialModule,
  ],
})
export class AdminModule {}
