import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestorComponent } from './investor/investor.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'dashboard'},
  {path:'dashboard',component:DashboardComponent},
  {path:'investor',component:InvestorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
