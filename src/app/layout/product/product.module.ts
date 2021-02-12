import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from '../nav/nav.module';
import { MatModuleModule } from '../../mat-module.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { PaymentComponent } from './payment/payment.component';
import { LiveStreamClassComponent } from './live-stream-class/live-stream-class.component';
import { DecideCostComponent } from './decide-cost/decide-cost.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { PublishComponent } from './publish/publish.component';
import { AddLiveClassComponent } from './add-live-class/add-live-class.component';
import { LiveClassesRequestComponent } from './live-classes-request/live-classes-request.component';
import { TestPreviewComponent } from './test-preview/test-preview.component';
import { InstructionPreviewComponent } from './instruction-preview/instruction-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProductComponent, AddProductComponent, PaymentComponent, LiveStreamClassComponent, DecideCostComponent, AddCourseComponent, PublishComponent, AddLiveClassComponent, LiveClassesRequestComponent, TestPreviewComponent, InstructionPreviewComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavModule,
    MatModuleModule,
    CKEditorModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    SharedModule, 
  ]
}) 
export class ProductModule { }
