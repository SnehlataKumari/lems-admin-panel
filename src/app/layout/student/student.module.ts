import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { MatModuleModule } from '../../mat-module.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StudentRegistrationComponent],
  imports: [
    SharedModule,
    CommonModule,
    StudentRoutingModule,
    NavModule,
    MatModuleModule,
  ]
})
export class StudentModule { }