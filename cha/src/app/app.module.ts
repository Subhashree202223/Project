import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from "ng2-charts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { LineComponent } from './line/line.component';
import { TablesComponent } from './tables/tables.component';
import { ReportsComponent } from './reports/reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ExistingReportComponent } from './existing-report/existing-report.component';
import { BubbleComponent } from './bubble/bubble.component';
import { FinancialComponent } from './financial/financial.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { PolarComponent } from './polar/polar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    BarComponent,
    PieComponent,
    LineComponent,
    TablesComponent,
    ReportsComponent,
    NewReportComponent,
    ExistingReportComponent,
    BubbleComponent,
    FinancialComponent,
    DoughnutComponent,
    PolarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
