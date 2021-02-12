import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-decide-cost',
  templateUrl: './decide-cost.component.html',
  styleUrls: ['./decide-cost.component.css']
})
export class DecideCostComponent implements OnInit {

  productId;
  decideCostForm: FormGroup;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      const productId = paramMap.get('productId');
      this.productId = productId;
      this.productService.fetchProductById(this.productId);
    });

    this.decideCostForm= this.fb.group({
      priceToCompare: ['', Validators.required],
      price: ['', Validators.required],
      chargeTax: [false]
    });

    this.productService.$product.subscribe((product) => {
      if (this.productId && product && product.decideCost) {
        this.decideCostForm.patchValue(product.decideCost);
      }

    });
  }

  async onDecideCost() {
    if (this.decideCostForm.invalid) {
      this.decideCostForm.markAllAsTouched();
      this.decideCostForm.updateValueAndValidity();
      return;
    }
    const formData = this.decideCostForm.value;
    await this.productService.updateProduct(this.productId, { decideCost: formData });
    this.router.navigate(['product', this.productId, 'add-course']);
  }
  // routerLink = "/product/add-course"
}
