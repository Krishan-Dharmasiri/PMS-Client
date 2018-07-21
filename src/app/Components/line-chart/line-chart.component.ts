import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chart = new Chart({
    chart:{
      type:'line'
    },
    title:{
      text:'Overall Performance'
    },
    credits:{
      enabled:false
    },
    series:[
      {
        name:'Overall Performance',
        data:[9,10,12,11]
      },
      {
        name:'Benchmark Performance',
        data:[8,10.5,11.9,11.1]
      }
    ]
  });

}
