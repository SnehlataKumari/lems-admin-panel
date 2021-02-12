import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestReportComponent } from './test-report/test-report.component';
import { TeacherReportComponent } from './teacher-report/teacher-report.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { IndividualTestReportComponent } from './individual-test-report/individual-test-report.component';
import { BlackWhiteReportComponent } from './black-white-report/black-white-report.component';
import { ColorReportComponent } from './color-report/color-report.component';

const routes: Routes = [
  { path: 'test-report',component: TestReportComponent},
  { path: 'teacher-report',component: TeacherReportComponent},
  { path: 'sales-report',component: SalesReportComponent},
  { path: 'individual-test',component: IndividualTestReportComponent},
  { path: 'black-white-report',component: BlackWhiteReportComponent},
  { path: 'color-report',component: ColorReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
