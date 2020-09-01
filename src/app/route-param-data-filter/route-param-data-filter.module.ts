import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteParamDataFilterRoutingModule } from './route-param-data-filter-routing.module';
import { RouteParamDataFilterComponent } from './route-param-data-filter.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [RouteParamDataFilterComponent],
  imports: [
    CommonModule,
    RouteParamDataFilterRoutingModule,
    MatSidenavModule, FlexLayoutModule, MatCardModule, MatListModule, MatChipsModule
  ]
})
export class RouteParamDataFilterModule { }
