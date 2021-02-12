import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TestService } from 'src/app/services/test.service';
import { AlertService } from 'src/app/services/alert.service';
import { SelectionModel } from '@angular/cdk/collections';
import { TeacherService } from 'src/app/services/teacher.service';

const displayedColumns = [
  'testCode',
  'teacherName',
  'requestSharedDate',
  'assignToGroup',
  'testCategory',
  'status'
];
@Component({
  selector: 'app-test-request',
  templateUrl: './test-request.component.html',
  styleUrls: ['./test-request.component.css']
})
export class TestRequestComponent implements OnInit {

  selectedTest;
  displayedColumns: string[] = displayedColumns;
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  paginator: MatPaginator;
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(
    private testService: TestService,
  ) { }
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.testService.fetchAllTests();
    this.testService.$testList.subscribe((testList) => {
      this.dataSource = new MatTableDataSource(testList);
    });
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  onAcceptTestRequest(test) {
    this.selectedTest = test;
    this.setIsAcceptedTestRequest(test, true);
  }

  onRejectTestRequest(test) {
    this.setIsAcceptedTestRequest(test, false);
  }

  onAddComment(test) {

  }

  async setIsAcceptedTestRequest(test, isApproved) {
    const response = await this.testService.setHasAcceptedRegistrationRequest(test, isApproved);
    await this.getTests();
  }

  async getTests() {
    const response = await this.testService.fetchAllTests();
    const teachers = response['data'];
    this.dataSource = new MatTableDataSource<any>(teachers);
    this.dataSource.paginator = this.paginator;
  }

}

