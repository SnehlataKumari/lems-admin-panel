import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModuleModule } from '../mat-module.module';
import { SharedRoutingModule } from './shared-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPasswordComponent } from './custom-password/custom-password.component';
import { CustomCheckboxFieldComponent } from './custom-checkbox-field/custom-checkbox-field.component';
import { CustomCheckboxFormgroupComponent } from './custom-checkbox-formgroup/custom-checkbox-formgroup.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { LiveClassBroadcastComponent } from './live-class-broadcast/live-class-broadcast.component';
import { NetlessWhiteboardComponent } from './netless-whiteboard/netless-whiteboard.component';

@NgModule({
  declarations: [
    ShowErrorsComponent,
    LoginComponent,
    CustomCheckboxFieldComponent,
    CustomCheckboxFormgroupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CustomPasswordComponent,
    LiveClassBroadcastComponent,
    NetlessWhiteboardComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, SharedRoutingModule],
  exports: [
    CustomPasswordComponent,
    CustomCheckboxFieldComponent,
    CustomCheckboxFormgroupComponent,
    ShowErrorsComponent,
    LiveClassBroadcastComponent,
    NetlessWhiteboardComponent,
  ],
})
export class SharedModule {}
