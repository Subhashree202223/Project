import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ExistingReportComponent } from './existing-report/existing-report.component';
import { TablesComponent } from './tables/tables.component';

import { ReportsComponent } from './reports/reports.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { FinChartComponent } from './fin-chart/fin-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import { CodesComponent } from './codes/codes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewReportComponent,
    ExistingReportComponent,
    TablesComponent,
    
    ReportsComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    FinChartComponent,
    ChartComponent,
    CodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
