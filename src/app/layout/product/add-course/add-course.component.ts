import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  productId;
  displayedColumns: string[] = ['id', 'uid', 'username', 'eroll' , 'bdatetime' , 'sname',];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.activateRoute.paramMap.subscribe((paramMap) => {
      const productId = paramMap.get('productId');
      this.productId = productId;
      this.productService.fetchProductById(this.productId);
    });
  }

  // routerLink = "/product/product-publish"
}

 
export interface PeriodicElement {
  id: string;
  uid: string;
  username: string;
  eroll: string;
  bdatetime: string;
  sname: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', uid: 'shivani', username: 'data', eroll: 'data', bdatetime: 'data', sname: 'data' ,},
]
