import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentRegistrationComponent } from './student-registration/student-registration.component';

const routes: Routes = [
  { path: 'student-registration',component: StudentRegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
