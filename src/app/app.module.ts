import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvestorComponent } from './investor/investor.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { TabComponent } from './Components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvestorComponent,
    LineChartComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
