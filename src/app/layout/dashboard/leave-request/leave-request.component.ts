import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const displayedColumns = [
  'id',
  'teacherId',
  'date',
  'noOfLeaveDays',
  'leaveType',
  'note',
  'action'
];
@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
  displayedColumns= displayedColumns ;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  onRejectTeacherLeaveRequest(element) {

  }

  onAcceptTeacherLeaveRequest(element) {

    
  }
}

 
export interface PeriodicElement {
  id: string;
  uid: string;
  username: string;
  bdatetime: string;
  sname: string;
  rdate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', uid: 'shivani', username: 'data', bdatetime: 'data', sname: 'data', rdate: 'data'},
]
