import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-imported-file',
  templateUrl: './imported-file.component.html',
  styleUrls: ['./imported-file.component.css']
})
export class ImportedFileComponent implements OnInit {
  displayedColumns: string[] = ['id', 'uid', 'username', 'bdatetime' , 'sname' ,'status' , 'assign',];
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
  assign:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '2', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '3', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '4', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '5', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '6', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '7', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '8', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '9', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '10', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '11', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '12', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '13', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '14', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '15', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '16', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '17', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '18', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '19', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},
  {id: '20', uid: 'data', username: 'data', bdatetime: 'data', sname: 'data', assign: 'data',},

]
