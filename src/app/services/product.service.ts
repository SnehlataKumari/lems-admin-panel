import { Injectable } from "@angular/core";
import { ApiService } from './api.service';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertService } from './alert.service';
import { findIndex } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  $product = new BehaviorSubject(null);
  $productsList = new BehaviorSubject([]);
  
  constructor(
    private apiService: ApiService,
    private alertService: AlertService,
  ) {

  }

  async getAllProducts() {
    const url = '/products';
    const response = await this.apiService.get(url).toPromise()
      .catch(error => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });

    this.$productsList.next(response['data']);
  }

  async validateProductCode(productCode) {
    const url = `/products/validate-product-code`;
    const response: any = await this.apiService.post(url, { productCode }).toPromise();
    return response;
  }

  async createProduct(formData) {
      const url = `/products`;
      const response: any = await this.apiService.post(url, formData).toPromise()
        .catch(error => {
          // const errorMessage = error.error.message;
          // this.alertService.error(errorMessage);
          throw error;
        });
      this.alertService.success('Product Added Successfully');
      return response;
    
  }


  async updateProduct(productId, formData) {
    const url = `/products/${productId}`;
    const response = await this.apiService.put(url, formData).toPromise()
      .catch(error => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.$product.next(response['data']);
    this.alertService.success('Product Updated Successfully');
    return response;
  }

  async fetchProductById(productId) {
    const url = `/products/${productId}`;
    const response: any = await this.apiService.get(url).toPromise()
      .catch(error => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    const product = response['data'];
    this.$product.next(product);
  }

  async deleteProduct(productId) {
    const url = `/products/${productId}`;
    const response = await this.apiService.delete(url).toPromise()
      .catch(error => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.$product.next(null);
    const productList = this.$productsList.value;
    if (productList.length > 0) {
      const index = findIndex(productList, { _id: productId });

      if (index > -1) {
        productList.splice(index, 1);
      }

      const newProductList = [...productList];
      this.$productsList.next(newProductList);
    }
  }
}
