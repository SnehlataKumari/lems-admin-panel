import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { MatModuleModule } from '../../mat-module.module';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { AddCondidateComponent } from './add-condidate/add-condidate.component';
import { CGroupComponent } from './c-group/c-group.component';
import { CDocumentComponent } from './c-document/c-document.component';
import { CandidateImportDataComponent } from './candidate-import-data/candidate-import-data.component';
import { RegistrationComponent } from './add-condidate/registration/registration.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CandidateComponent,
    AddCondidateComponent,
    CGroupComponent,
    CDocumentComponent,
    CandidateImportDataComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CandidateRoutingModule,
    NavModule,
    MatModuleModule
  ]
})
export class CandidateModule { }
