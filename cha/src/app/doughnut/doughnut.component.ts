import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public doughnutChartLabels: string[] = [ 'Mason Charges', 'Painting Expenses', 'Material costs' ];
    public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
        { data: [ 350, 450, 100 ], label: 'Guwahati' },
        { data: [ 50, 150, 120 ], label: 'Chennai' },
        { data: [ 250, 130, 70 ], label: 'Pune' }
      ];

    public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
      responsive: false
    };
}
