import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.css']
})
export class PolarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public polarAreaChartLabels: string[] = [ 'Report Generation', 'Workflow Management', 'Product Management', 'People Management', 'Document Generation' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 440, 500, 250, 140, 320 ] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

}
