import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TeacherService } from 'src/app/services/teacher.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import matchSorter from 'match-sorter';

declare var $: any;
const strongPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  hostUrl = environment.hostUrl;
  selectedTeacherId;
  selectedUserId;
  editTeacherId;

  changePasswordForm = this.fb.group({
    currentPassword: ['', [Validators.required, Validators.pattern(strongPass)]],
    confirmPassword: ['', Validators.required]
  }, { validator: this.checkPasswords });

  constructor(
    private teachersService: TeacherService,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  
  teachers;
  displayedColumns: string[] = ['name', 'email', 'phone', 'registrationDate', 'assign'];
  keysToFilterOn = ['userId.firstName', 'userId.lastName', 'userId.phone', 'userId.email'];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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
  
  setSelectedTeacher(teacherId) {
    this.selectedTeacherId = teacherId;
  }

  setSelectedUserId(userId) {
    this.selectedUserId = userId;
  }

  async deleteTeacher() {
    const response = await this.teachersService.deleteTeacher(this.selectedTeacherId);
    this.getTeachers();
    return response;
  }

  async cancelDeleteTeacher() {
   
  }

  async onUpdateTeacherPassword() {
  const userId= this.selectedUserId;
    const formValue = this.changePasswordForm.value;
    await this.authService.updateTeacherPassword(userId, formValue);
    $('#change-password').modal('hide');
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('currentPassword').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : { notSame: true }
  }

  getTrueValues(obj) {
    if (!obj) {
      return null;
    }
    return Reflect.ownKeys(obj)
      .filter(key => obj[key] === true).join(', ');
  }

}
