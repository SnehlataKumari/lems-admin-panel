import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { MatModuleModule } from '../../mat-module.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { ChartsModule } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TestComponent } from './test-manager/test/test.component';
import { ImportedFileComponent } from './test-manager/imported-file/imported-file.component';
import { AddTestComponent } from './test-manager/add-test/add-test.component';
import { PublishTestComponent } from './test-manager/publish-test/publish-test.component';
import { AssignTestComponent } from './test-manager/assign-test/assign-test.component';
import { AddQuestionTestComponent } from './test-manager/add-question-test/add-question-test.component';
import { TestSettingComponent } from './test-manager/test-setting/test-setting.component';
import { TestRequestComponent } from './test-request/test-request.component';
import { AddImportFileComponent } from './test-manager/add-import-file/add-import-file.component';
import { AddQuestionManuallyComponent } from './test-manager/add-question-manually/add-question-manually.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, TestComponent, ImportedFileComponent, AddTestComponent, PublishTestComponent, AssignTestComponent, AddQuestionTestComponent, TestSettingComponent, TestRequestComponent, AddImportFileComponent, AddQuestionManuallyComponent, LeaveRequestComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavModule,
    ChartsModule,
    SharedModule,
    MatModuleModule,
    NgxMaterialTimepickerModule
  ]
})
export class DashboardModule { }
