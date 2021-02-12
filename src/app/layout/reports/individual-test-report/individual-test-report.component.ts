import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-individual-test-report',
  templateUrl: './individual-test-report.component.html',
  styleUrls: ['./individual-test-report.component.css']
})
export class IndividualTestReportComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cname', 'enrollment', 'pno' , 'attempno'  ,'mark' , 'status' , 'correct' , 'incorrect' , 'skipped' , 'rank' , 'sdate' , 'edate' , 'dpdf'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

 
export interface PeriodicElement {
  id: string;
  cname: string;
  enrollment: string;
  avscorpno: string;
  attempno: string;
  mark: string;
  status: string;
  correct: string;
  incorrect: string;
  skipped: string;
  rank: string;
  sdate: string;
  edate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', cname: 'shivani', enrollment: 'data', avscorpno: 'data', attempno: 'data' ,mark: 'data', status: 'data' , correct: 'data' , incorrect: 'data' , skipped: 'data' ,rank: 'data' , sdate: 'data' , edate: 'data' },
]
