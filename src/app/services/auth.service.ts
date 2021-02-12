import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from './alert.service';
import { BehaviorSubject } from 'rxjs';
import { FormService } from './form.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user;
  token;
  $teacher = new BehaviorSubject({});
  $user = new BehaviorSubject(null);

  constructor(
    private router: Router,
    private formsService: FormService,
    private api: ApiService,
    private alertService: AlertService
  ) {
    const accessToken = localStorage.getItem('access_token');
    const user = localStorage.getItem('user');

    if (user) {
      this.user = JSON.parse(user);
      this.$user.next(this.user);
    }

    this.token = accessToken;
  }

  // Admin Login -------------------------------------------------------------------------------------------
  async Adminlogin({ email, password }) {
    const url = `/auth/login-admin`;
    const response: any = await this.api
      .post(url, {
        email,
        password,
      })
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.afterLogin(response);
  }
  // After Admin Login ----------------------------------------------------------------------------------------------

  afterLogin(response) {
    const {
      data: { token: access_token, user },
    } = response;
    this.user = user;
    this.token = access_token;
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('user', JSON.stringify(user));

    this.navigateAfterLogin();
  }

  navigateAfterLogin() {
    this.router.navigate(['home', 'dashboard']);
  }

  //Admin Logout --------------------------------------------------------------------------------------

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.user = null;
    this.token = null;
    this.router.navigate(['']);
  }

  afterLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.user = null;
    this.token = null;
    this.router.navigate(['login']);
  }
  isLoggedIn() {
    const accessToken = localStorage.getItem('access_token');
    return !!accessToken;
  }

  getLogginedUserRole(): string {
    return this.user.role;
  }

  // Admin Forgot Password -------------------------------------------------------------------------------
  async forgotAdminPassword(formValue) {
    const url = `/auth/forgot-password-admin`;
    const response: any = await this.api
      .post(url, formValue)
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });

    this.alertService.success('Reset password link sent on your email.');
    this.router.navigate(['reset-password']);
  }

  // Admin Reset Password -------------------------------------------------------------------------------------
  async resetAdminPassword(formValue) {
    const url = `/auth/reset-password`;
    const response: any = await this.api
      .post(url, formValue)
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.alertService.success('Password updated successfully :)');
    this.router.navigate(['']);
  }

  // Admin Panel Add New Teacher -------------------------------------------------------------------------------------
  async addNewTeacher(formValue) {
    const url = `/auth/signup-teacher`;
    const response: any = await this.api
      .post(url, formValue)
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.afterAddNewTeacher(response);
  }

  afterAddNewTeacher(response) {
    this.alertService.success('New Teacher Added Successfully ');
  }

  // async changePassword(formValue) {
  //   const url = `/auth/change-password`;
  //   const response: any = await this.api.post(url, formValue).toPromise()
  //     .catch(error => {
  //       const errorMessage = error.error.message;
  //       this.alertService.error(errorMessage);
  //       throw error;
  //     });
  //   this.alertService.success('Password changed successfully :)');
  // }

  // async editProfile(formValue) {
  //   const url = `/auth/edit-profile`;

  //   const response: any = await this.api.put(url, this.formsService.jsonToFormData(formValue)).toPromise()
  //     .catch(error => {
  //       const errorMessage = error.error.message;
  //       this.alertService.error(errorMessage);
  //       throw error;
  //     });
  //   this.$teacher.next({ ...this.$teacher.value, ...formValue.teacher });
  //   this.$user.next({ ...this.$user.value, ...formValue.user });
  //   this.user = this.$user.value;
  //   localStorage.setItem('user', JSON.stringify(this.user));
  //   this.alertService.success('Profile updated successfully :)');
  // }

  // via Admin Panel------------------------------------------------------------
  async updateTeacherProfileByAdmin(teacherId, formValue) {
    const url = `/teachers/${teacherId}/update-profile`;
    const response: any = await this.api
      .put(url, this.formsService.jsonToFormData(formValue))
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.$teacher.next({ ...this.$teacher.value, ...formValue.teacher });
    this.$user.next({ ...this.$user.value, ...formValue.user });
    this.user = this.$user.value;
    localStorage.setItem('user', JSON.stringify(this.user));
    this.alertService.success('Profile updated successfully :)');
  }

  // via Admin Panel-------------------------------------------------------------------------------------
  async updateTeacherPassword(userId, formValue) {
    const url = `/users/${userId}/update-password`;
    const response: any = await this.api
      .post(url, formValue)
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.alertService.success(response.message);
  }
  // VIA ADMIN PANEL ----------------------------------------------------------------------------------------
  async studentRegistration(formData) {
    const url = `/auth/sign-up-student`;
    const { firstName, email, password, grade, phone } = formData;
    const formValue = { firstName, email, password, grade, phone };
    const response: any = await this.api
      .post(url, formValue)
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.afterStudentRegistration(response);
  }

  async updateStudent(studentId, formValue) {
    const response = await this.api
      .put(`/students/${studentId}/update-profile`, {
        user: formValue,
        student: { education: { grade: formValue.grade } },
      })
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });

    this.alertService.success('Updated successfully!');
  }

  afterStudentRegistration(response) {
    this.alertService.success('Student Registered successfully!');
  }

  async registerNewStudent(formData) {
    const url = `/auth/sign-up-student`;
    const { firstName, email, password, grade, phone } = formData;
    const formValue = { firstName, email, password, grade, phone };
    const response: any = await this.api
      .post(url, formValue)
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    this.alertService.success('Candidate registered successfully!');
  }
}
