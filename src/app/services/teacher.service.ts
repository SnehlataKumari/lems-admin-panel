import { Injectable } from "@angular/core";
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  constructor(
    private api: ApiService,
    private alertService: AlertService
  ) {}

  async getAllTeachers() {
    const url = `/teachers`;
    const response: any = await this.api.get(url).toPromise()
      .catch(error => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    return response;
  }

  // async getTeacherToDelete(teacherId) {
  //   const url = `/teachers/:teacherId`;
  //   const response: any = await this.api.get(url, {teacherId}).toPromise()
  //     .catch(error => {
  //       const errorMessage = error.error.message;
  //       this.alertService.error(errorMessage);
  //       throw error;
  //     });
  //   return response;
  // }

  // VIA ADMIN PANEL ---------------------------------------------------------------------------------------
  async deleteTeacher(teacherId) {
    const url = `/teachers/${teacherId}`;
    const response: any = await this.api.delete(url).toPromise()
      .catch(error => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    return response;
  }

  async setHasAcceptedRegistrationRequest(teacher, hasAcceptedRegistrationRequest) {
    const url = `/teachers/${teacher._id}${hasAcceptedRegistrationRequest ? '/accept-registration-request' : '/reject-registration-request'}`;
    return await this.api.put(url, {hasAcceptedRegistrationRequest}).toPromise();
  }

  getTeacherById(teacherId) {
    return this.api.get(`/teachers/${teacherId}/get-teacher-details`);
  }

}
