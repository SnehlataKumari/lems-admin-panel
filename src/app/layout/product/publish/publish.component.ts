import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import * as moment from 'moment';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css'],
})
export class PublishComponent implements OnInit {
  productId;
  publishProductForm: FormGroup;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      const productId = paramMap.get('productId');
      this.productId = productId;
      this.productService.fetchProductById(this.productId);
    });

    this.publishProductForm = this.fb.group({
      startPublishDate: ['', [Validators.required, this.validateStartPublishDate.bind(this)]],
      endPublishDate: [
        '',
        [Validators.required, this.validateEndPublishDate.bind(this)],
      ],
      publish: [false],
    });
    this.productService.$product.subscribe((product) => {
      if (this.productId && product && product.publishProduct) {
        this.publishProductForm.patchValue(product.publishProduct);
      }
    });
  }

  validateEndPublishDate(control: AbstractControl) {
    const { startPublishDate } = control.root.value;
    const endPublishDate = control.value;
    if (!moment(endPublishDate).isValid) {
      return { dateNotValid: 'Date is not valid' };
    }

    const startDateObj = moment(startPublishDate);
    const endDateObj = moment(endPublishDate);
    if (
      startDateObj.isValid &&
      endDateObj.isValid &&
      endDateObj.isBefore(startDateObj)
    ) {
      return { endDateNotValid: 'End date must be after start date' };
    }

    return null;
  }

  validateStartPublishDate(control: AbstractControl) {
    const { endPublishDate } = control.root.value;
    const startPublishDate = control.value;
    
    if (!moment(startPublishDate).isValid) {
      return { dateNotValid: 'Date is not valid' };
    }

    const startDateObj = moment(startPublishDate);
    const endDateObj = moment(endPublishDate);
    if (
      startDateObj.isValid &&
      startDateObj.isBefore(moment(), 'day')
    ) {
      return { endDateNotValid: "Start date must be not be before today's date" };
    }
    if(
      endDateObj.isValid &&
      endDateObj.isBefore(startDateObj)
    ){
        return { endDateNotValid: "Start date must be before end date" };
      }
    return null;
  }
 
  // routerLink = "/product/product"
  async onPublishProduct() {
    if (this.publishProductForm.invalid) {
      this.publishProductForm.markAllAsTouched();
      this.publishProductForm.updateValueAndValidity();
      return;
    }

    let formData = this.publishProductForm.value;
    formData = JSON.parse(JSON.stringify(formData));
    await this.productService.updateProduct(this.productId, {
      publishProduct: formData,
    });
  }
}
