import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'uid', 'username', 'bdatetime' , 'sname' ,'action' ,];
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
  bdatetime: string;
  sname: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', },
  {id: '2', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', },
  {id: '3', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', },
  {id: '4', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', },
  {id: '5', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', },

]
