import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pieChartOptions: ChartOptions<'pie'> = {
     responsive: false,
   };
   public pieChartLabels = [ [ 'Cement'], ['Paint'], 'Tools' ];
   public pieChartDatasets = [ {
     data: [ 300, 500, 100 ]
   } ];
   public pieChartLegend = true;
   public pieChartPlugins = [];

}
