import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteParamDataFilterRoutingModule } from './route-param-data-filter-routing.module';
import { RouteParamDataFilterComponent } from './route-param-data-filter.component';


@NgModule({
  declarations: [RouteParamDataFilterComponent],
  imports: [
    CommonModule,
    RouteParamDataFilterRoutingModule
  ]
})
export class RouteParamDataFilterModule { }
