import { Component, OnInit } from '@angular/core';
import { LineChartComponent } from '../Components/line-chart/line-chart.component';
import { TagContainerComponent} from '../Components/tab-container/tab-container.component';
import { TabsComponent} from '../Components/tabs/tabs.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }  

}
