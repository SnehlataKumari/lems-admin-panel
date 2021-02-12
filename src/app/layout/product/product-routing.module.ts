import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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

const routes: Routes = [
  { path: 'product',component: ProductComponent},
  { path: 'add-product',component: AddProductComponent},
  { path: ':productId/add-product', component: AddProductComponent },
  { path: 'payement',component: PaymentComponent},
  { path: 'live-stream',component: LiveStreamClassComponent},
  // { path: 'decide-cost',component: DecideCostComponent},
  { path: ':productId/decide-cost', component: DecideCostComponent },
  // { path: 'add-course',component: AddCourseComponent},
  { path: ':productId/add-course', component: AddCourseComponent },
  // { path: 'product-publish',component: PublishComponent},
  { path: ':productId/product-publish', component: PublishComponent },
  { path: 'add-live-classes',component: AddLiveClassComponent},
  { path: 'live-class-request',component: LiveClassesRequestComponent},
  { path: 'test-preview',component: TestPreviewComponent},
  { path: 'instruction-preview',component: InstructionPreviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
