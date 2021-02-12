import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, SelectControlValueAccessor, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
declare var $: any;
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  progress: number;
  uploadPosterId: any;
  message: string;
  createProductForm: FormGroup;
  ckeConfig: any;
  productId;
  oldupdateValue;
  // mycontent: string;
  // log: string = '';
  @ViewChild("myckeditor") ckeditor: any;
  constructor(
    private fb: FormBuilder,
    private uploadService: UploadFileService,
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    // this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit(): void {
 
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
    };

    this.createProductForm= this.fb.group({
      productName: ['', Validators.required],
      productDescription: [''],
      productCode: ['', Validators.required, this.validateProductCode.bind(this)],
      gradeName: [''],
      productType: [''],
      language: [''],
      courseLevel: [''],
      courseRestriction: [''],
      sampleCourse: [''],
    });

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.productId = paramMap.get('productId');
      if (this.productId) {
        this.productService.fetchProductById(this.productId);
      }
    });

    this.productService.$product.subscribe(product => {
      if (this.productId && product) {
        // this.questions.controls = [];
        this.oldupdateValue = product;
        this.createProductForm.patchValue(product);
      }
    });


  }

  single;
  singleFiles(event) {
    var singleFiles = event.target.files;
    this.single = singleFiles[0];

    if (singleFiles) {
      for (var file of singleFiles) {
        var singleReader = new FileReader();
        singleReader.onload = (e) => {
          $('.imageFile')
            .attr('src', e.target.result)
            .show();
        }
        singleReader.readAsDataURL(file);
      }
    }
  }

  async onAddProduct() {
    if (this.createProductForm.invalid) {
      this.createProductForm.markAllAsTouched();
      this.createProductForm.updateValueAndValidity();
      return;
    }

    let formData = this.createProductForm.value;
    formData = JSON.parse(JSON.stringify(formData));

    if (this.single) {
      this.uploadService.upload(this.single).subscribe(
        async event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const reqBody = {
              productImageId: event.body['_id'],
              ...formData,
            };

            // this.createProduct(reqBody);
            if (this.productId) {
              await this.updateproduct(this.productId, reqBody);
              this.router.navigate(['product', this.productId, 'decide-cost']);
            } else {
              return this.createProduct(reqBody);
            }
          }
        },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.single = undefined;
        });
      this.single = undefined;
    } else {
      if (this.productId) {
        await this.updateproduct(this.productId, formData);
        this.router.navigate(['product', this.productId, 'decide-cost']);
      } else {
        return this.createProduct(formData);
      }
      // this.createProduct(formData);
    }
    
  }

  async validateProductCode(control: AbstractControl) {
    if (this.productId && this.oldupdateValue.productCode === control.value) {
      return null;
    }
    const isValid = await this.productService.validateProductCode(control.value);
    return isValid ? null : { productCodeNotUnique: 'Product Code is dublicate' };
  }


 async createProduct(formData) {
    const response= (await this.productService.createProduct(formData))['data'];
    this.afterCreateProduct(response._id);
  }

  async updateproduct(productId, formValue) {
    const response= await this.productService.updateProduct(productId, formValue);
  }
  // routerLink = "/product/decide-cost"
  afterCreateProduct(productId) {
    this.productId= productId;
    this.router.navigate(['product', this.productId, 'decide-cost']);
  }
}
