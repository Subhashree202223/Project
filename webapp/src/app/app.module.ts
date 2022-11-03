import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewReportComponent } from './new-report/new-report.component';
import { StaticSidebarComponent } from './static-sidebar/static-sidebar.component';
import { ChartsListComponent } from './charts-list/charts-list.component';
import { ChartsComponent } from './charts/charts.component';
import { SaveFileComponent } from './save-file/save-file.component';
import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';
import { ReportComponent } from './report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExistingReportComponent } from './existing-report/existing-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewReportComponent,
    
    StaticSidebarComponent,
    ChartsListComponent,
    ChartsComponent,
    SaveFileComponent,
    ReportDashboardComponent,
    ReportComponent,
    ExistingReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
