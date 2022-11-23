import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ExistingReportComponent } from './existing-report/existing-report.component';
import { ChartComponent } from './chart/chart.component';
//import { ChartsListComponent } from './charts-list/charts-list.component';
import { TablesComponent } from './tables/tables.component';
import { ReportsComponent } from './reports/reports.component';
const routes: Routes = [
// {path: '**', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'new-report', component: NewReportComponent},
{path: 'existing-report', component: ExistingReportComponent},
//{path: 'chart-list', component: ChartsListComponent},
{path: 'chart', component: ChartComponent},
{path: 'tables', component: TablesComponent},
{path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
