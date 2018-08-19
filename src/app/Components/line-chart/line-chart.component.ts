import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private chart:any;

  constructor() {    
    
   }

  ngOnInit() {
    //Is this is the best place to call this method??
    this.loadData();
  }  

  private loadData(){
      //This method should call the DataService to get the data from an API
      // data variable is the one returnd from the API
      var data:any = {};
      data.chartTile = 'Overall Performance';
      data.yAxisTitle = 'Return (%)';
      data.series = [
        {
          name:'Overall Performance',
          data:[9,10,12,11]
        },
        {
          name:'Benchmark Performance',
          data:[8,10.5,11.9,11.1]
        }
      ];

      this.chart = new Chart({
        chart:{
          type:'line'
        },
        title:{
          text:data.chartTile
        },
        credits:{
          enabled:false
        },
        yAxis:{
          min:0,
          max:100,
            title:{
              text:data.yAxisTitle
            }
        },
        series: data.series  
        
      });
      
  }

}
