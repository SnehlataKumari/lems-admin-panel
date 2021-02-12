import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateComponent } from './candidate.component';
import { AddCondidateComponent } from './add-condidate/add-condidate.component';
import { CGroupComponent } from './c-group/c-group.component';
import { CDocumentComponent } from './c-document/c-document.component';
import { CandidateImportDataComponent } from './candidate-import-data/candidate-import-data.component';

const routes: Routes = [
  { path: 'candidate',component: CandidateComponent},
  { path: 'add-candidate',component: AddCondidateComponent},
  { path: ':studentId/edit',component: AddCondidateComponent},
  { path: 'group',component: CGroupComponent},
  { path: 'document',component: CDocumentComponent},
  { path: 'candidate-import-data',component: CandidateImportDataComponent},
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
