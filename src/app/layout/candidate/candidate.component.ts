import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { StudentService } from 'src/app/services/student.service';
import { environment } from 'src/environments/environment';
import matchSorter from 'match-sorter';

const studentColumnDisplay = [
   'name', 'email', 'phone', 'grade', 'registeredOn', 'action'
];

const keysToFilterOn = ['user.firstName', 'user.lastName', 'user.phone', 'user.email', 'student.grade'];
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  
  hostUrl = environment.hostUrl;

  constructor(
    private studentService: StudentService
  ) {}

  selectStudents: string[] = [];
  user;
  student;
  students;

  displayedColumns: string[] = studentColumnDisplay;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource = new MatTableDataSource(matchSorter(this.students, filterValue, { keys: keysToFilterOn}));
  }

  ngOnInit() {
    // this.dataSource = new 
    this.studentService.getAllStudents();
    this.studentService.$studentsList.subscribe(students => {
      this.setDataSource(students);
    });
  }

  getTrueValues(obj) {
    if (!obj) {
      return null;
    }
    return Reflect.ownKeys(obj)
      .filter(key => obj[key] === true).join(', ');
  }

  setDataSource(students) {
    this.students = students;
    this.dataSource = new MatTableDataSource(students);
  }

  selectStudent(element) {
    this.selectStudents = [element.student._id];
  }

  selectStudentProfile(element) {
    this.user = element.user;
    this.student = element.student;
  }

  deleteSelectedStudents() {
    console.log(this.selectStudents);
    this.studentService.deleteStudents(this.selectStudents);
  }
}

 
export interface PeriodicElement {
  id: string;
  uid: string;
  username: string;
  eroll: string;
  bdatetime: string;
  sname: string;
  status: string;
  rdate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {id: '1', uid: 'shivani', username: 'data', eroll: 'data', bdatetime: 'data', sname: 'data' , status: 'data' , rdate: 'data'},
]
