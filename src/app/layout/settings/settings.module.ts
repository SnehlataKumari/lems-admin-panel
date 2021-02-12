import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { MatModuleModule } from '../../mat-module.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { AdminUserComponent } from './admin-user/admin-user.component';


@NgModule({
  declarations: [AdminUserComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NavModule,
    MatModuleModule
  ]
})
export class SettingsModule { }
