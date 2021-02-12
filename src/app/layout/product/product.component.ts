import { SelectionModel } from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private alertService: AlertService
  ) { }

  displayedColumns: string[] = ['productCode', 'productName', 'productType', 'productCost' , 'publishStartDate' , 'publishEndDate' , 'action'];
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
    products;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.getAllProducts();
    this.productService.$productsList.subscribe((productList) => {
      console.log(productList); 
      this.dataSource = new MatTableDataSource(productList);
    });
  }

  async getAllProducts() {
    this.products= await this.productService.getAllProducts();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  onPublishTest(elements) {
    this.alertService.success("It's working!");
  }
  onExportTest(elements) {
    this.alertService.success("It's working!");
  }
  onAssignTest(elements) {
    this.alertService.success("It's working!");
  }
  onNotification(elements) {
    this.alertService.success("It's working!");
  }
  onImportTagTest(elements) {
    this.alertService.success("It's working!");
  }
  onDuplicateTag(elements) {
    this.alertService.success("It's working!");
  }
  onDeleteSelected() {
    this.selection.selected.forEach(product => {
      this.deleteProduct(product);
    });
  }

  async deleteProduct(product) {
    await this.productService.deleteProduct(product._id);
    // this.dataSource.paginator = this.paginator;
    this.getAllProducts;
  }
}

 

