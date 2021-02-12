import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { RegistrationRequestComponent } from './registration-request/registration-request.component';
import { AddNewTeacherComponent } from './add-new-teacher/add-new-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

const routes: Routes = [
  { path: 'teacher',component: TeacherComponent},
  { path: 'add-teacher',component: AddTeacherComponent},
  { path: 'registartion-requestion',component: RegistrationRequestComponent},
  { path: 'add-new-teacher', component: AddNewTeacherComponent},
  { path: 'edit-teacher/:teacherId', component: EditTeacherComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
