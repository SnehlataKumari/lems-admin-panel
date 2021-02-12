import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-c-group',
  templateUrl: './c-group.component.html',
  styleUrls: ['./c-group.component.css']
})
export class CGroupComponent implements OnInit {
  displayedColumns: string[] = ['id', 'uid', 'username', 'eroll' , 'assign'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

 
export interface PeriodicElement {
  id: string;
  uid: string;
  username: string;
  eroll: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', uid: 'shivani', username: 'data', eroll: 'data',},
]
