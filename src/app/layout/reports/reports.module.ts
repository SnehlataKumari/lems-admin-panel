import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { MatModuleModule } from '../../mat-module.module';

import { ReportsRoutingModule } from './reports-routing.module';
import { TestReportComponent } from './test-report/test-report.component';
import { TeacherReportComponent } from './teacher-report/teacher-report.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { IndividualTestReportComponent } from './individual-test-report/individual-test-report.component';
import { BlackWhiteReportComponent } from './black-white-report/black-white-report.component';
import { ColorReportComponent } from './color-report/color-report.component';


@NgModule({
  declarations: [TestReportComponent, TeacherReportComponent, SalesReportComponent, IndividualTestReportComponent, BlackWhiteReportComponent, ColorReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    NavModule,
    MatModuleModule
  ]
})
export class ReportsModule { }
