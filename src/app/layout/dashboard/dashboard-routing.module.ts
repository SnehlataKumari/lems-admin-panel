import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TestComponent } from './test-manager/test/test.component';
import { ImportedFileComponent } from './test-manager/imported-file/imported-file.component';
import { AddTestComponent } from './test-manager/add-test/add-test.component';
import { TestRequestComponent } from './test-request/test-request.component';
import { PublishTestComponent } from './test-manager/publish-test/publish-test.component';
import { AssignTestComponent } from './test-manager/assign-test/assign-test.component';
import { AddQuestionTestComponent } from './test-manager/add-question-test/add-question-test.component';
import { TestSettingComponent } from './test-manager/test-setting/test-setting.component';
import { AddImportFileComponent } from './test-manager/add-import-file/add-import-file.component';
import { AddQuestionManuallyComponent } from './test-manager/add-question-manually/add-question-manually.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';



const routes: Routes = [
  { path: 'dashboard',component: DashboardComponent},
  { path: 'test',component: TestComponent},
  { path: 'imported-file',component: ImportedFileComponent},
  { path: 'add-test',component: AddTestComponent},
  { path: ':testId/add-test', component: AddTestComponent },
  { path: 'test-request',component: TestRequestComponent},
  { path: ':testId/publish-test',component: PublishTestComponent},
  { path: ':testId/assign-test',component: AssignTestComponent},
  { path: ':testId/add-question',component: AddQuestionTestComponent},
  { path: ':testId/test-setting',component: TestSettingComponent},
  { path: ':testId/add-import-file',component: AddImportFileComponent},
  { path: ':testId/add-question-manually',component: AddQuestionManuallyComponent},
  { path: 'leave-rquest',component: LeaveRequestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { } 

