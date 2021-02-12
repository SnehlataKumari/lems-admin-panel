import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  $studentsList = new BehaviorSubject([]);
  constructor(
    private api: ApiService,
    private alertService: AlertService
  ) {}

  async getAllStudents() {
    const url = '/students';
    const response = await this.api.get(url).toPromise();
    this.$studentsList.next(response['data']);
  }

  async deleteStudents(studentIds: String[]) {
    const responses = await Promise.all(studentIds.map(async (studentId) => {
      const url = `/students/${studentId}`;
      return await this.api.delete(url).toPromise();
    }));

    this.alertService.success('StudentDeleted successfully!');
    this.getAllStudents();
  }

  async fetchStudentById(studentId) {
    const url = `/students/${studentId}`;
    const res = await this.api.get(url).toPromise();
    return res['data'];
  }
}