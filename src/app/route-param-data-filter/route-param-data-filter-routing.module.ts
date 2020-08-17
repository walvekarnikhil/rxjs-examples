import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteParamDataFilterComponent } from './route-param-data-filter.component';

const routes: Routes = [{ path: '', component: RouteParamDataFilterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteParamDataFilterRoutingModule { }
