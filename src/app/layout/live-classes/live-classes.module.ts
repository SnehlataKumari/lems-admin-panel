import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavModule } from '../nav/nav.module';
import { MatModuleModule } from '../../mat-module.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { LiveClassesRoutingModule } from './live-classes-routing.module';
import { LiveClassesComponent } from './live-classes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LiveClassesComponent],
  imports: [
    CommonModule,
    LiveClassesRoutingModule,
    NavModule,
    MatModuleModule,
    NgxMaterialTimepickerModule,
    SharedModule,
  ],
})
export class LiveClassesModule {}
