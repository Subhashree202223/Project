import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ExistingReportComponent } from './existing-report/existing-report.component';
const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'new-report', component: NewReportComponent},
{path: 'existing-report', component: ExistingReportComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
