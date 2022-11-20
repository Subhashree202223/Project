import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ExistingReportComponent } from './existing-report/existing-report.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsListComponent } from './charts-list/charts-list.component';
import { TablesComponent } from './tables/tables.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [
// {path: '**', component: HomeComponent},
{path: 'home', component: HomeComponent},
{path: 'new-report', component: NewReportComponent},
{path: 'existing-report', component: ExistingReportComponent},
{path: 'chart-list', component: ChartsListComponent},
{path: 'chart', component: ChartsComponent},
{path: 'tables', component: TablesComponent},
{path: 'report', component: ReportComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
