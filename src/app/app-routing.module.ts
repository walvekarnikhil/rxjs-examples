import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'routeParamDataFilter',
  loadChildren: () => import('./route-param-data-filter/route-param-data-filter.module').then(m => m.RouteParamDataFilterModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
