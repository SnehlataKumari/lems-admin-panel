import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TeacherService } from 'src/app/services/teacher.service';
import { AlertService } from 'src/app/services/alert.service';
import { environment } from 'src/environments/environment';
import matchSorter from 'match-sorter';

@Component({
  selector: 'app-registration-request',
  templateUrl: './registration-request.component.html',
  styleUrls: ['./registration-request.component.css']
})
export class RegistrationRequestComponent implements OnInit {

  hostUrl = environment.hostUrl;
  teachers;
  constructor(
    private teachersService: TeacherService,
    private alertService: AlertService
  ) { }
  displayedColumns: string[] = ['name', 'email', 'phone', 'highestQualification', 'createdAt', 'location', 'assign'];
  keysToFilterOn = ['userId.firstName', 'userId.lastName', 'userId.phone', 'userId.email'];

  dataSource: MatTableDataSource<any>;
  selectedTeacher;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.getTeachers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource = new MatTableDataSource(matchSorter(this.teachers, filterValue, { keys: this.keysToFilterOn }));
  }

  async getTeachers() {
    const response = await this.teachersService.getAllTeachers();
    const teachers = response['data'];
    this.teachers = teachers;
    this.dataSource = new MatTableDataSource<any>(teachers);
    this.dataSource.paginator = this.paginator;
  }

  onAcceptTeacher(teacher) {
    this.setHasAcceptedRegistrationRequest(teacher, true);
  }
  
  onRejectTeacher(teacher) {
    this.setHasAcceptedRegistrationRequest(teacher, false);
  }
  
  async setHasAcceptedRegistrationRequest(teacher, hasAcceptedRegistrationRequest) {
    const response = await this.teachersService.setHasAcceptedRegistrationRequest(teacher, hasAcceptedRegistrationRequest);
    this.alertService.success(response['message']);
    await this.getTeachers();
  }

  setSelectedTeacher(element) {
    this.selectedTeacher = element;
  }

  getTrueValues(obj) {
    if (!obj) {
      return null;
    }
    return Reflect.ownKeys(obj)
      .filter(key => obj[key] === true).join(', ');
  }
}

