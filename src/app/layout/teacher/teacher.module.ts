import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { MatModuleModule } from '../../mat-module.module';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { RegistrationRequestComponent } from './registration-request/registration-request.component';
import { AddNewTeacherComponent } from './add-new-teacher/add-new-teacher.component';
import { FileFieldComponent } from './file-field/file-field.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TeacherComponent , FileFieldComponent, AddTeacherComponent, RegistrationRequestComponent, AddNewTeacherComponent, EditTeacherComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    NavModule,
    MatModuleModule,
    SharedModule
  ]
})
export class TeacherModule { }