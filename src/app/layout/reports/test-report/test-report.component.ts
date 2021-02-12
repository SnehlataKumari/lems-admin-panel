import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tname', 'tcandid', 'avscor' , 'tmark'  ,'data1' , 'data2'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

 
export interface PeriodicElement {
  id: string;
  tname: string;
  tcandid: string;
  avscor: string;
  tmark: string;
  data1: string;
  data2: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', tname: 'shivani', tcandid: 'data', avscor: 'data', tmark: 'data' ,data1: 'data', data2: 'data'},
]
