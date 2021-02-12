import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class LiveClassService {
  constructor(
    private apiService: ApiService,
    private alertService: AlertService
  ) {}

  async getAllLiveService() {
    return this.apiService.get('/live-class').toPromise();
  }

  async getAllLiveClassCreatedByAdmin() {
    return this.apiService.get('/live-class/by-admin').toPromise();
  }

  async acceptLiveClass(selectedLiveClass) {
    const url = `/live-class/${selectedLiveClass._id}/accept-live-class-request`;
    return await this.apiService.put(url).toPromise();
  }

  async rejectLiveClass(selectedLiveClass, rejectionReason) {
    const url = `/live-class/${selectedLiveClass}/reject-live-class-request`;
    return await this.apiService.put(url, { rejectionReason }).toPromise();
  }

  async deleteLiveClass(liveClassId) {
    const url = `/live-class/${liveClassId}`;
    const response: any = await this.apiService
      .delete(url)
      .toPromise()
      .catch((error) => {
        const errorMessage = error.error.message;
        this.alertService.error(errorMessage);
        throw error;
      });
    return response;
  }

  async addLiveClass(formData) {
    const url = `/live-class/by-admin`;
    const response: any = await this.apiService
      .post(url, formData)
      .toPromise()
      .catch((error) => {
        // const errorMessage = error.error.message;
        // this.alertService.error(errorMessage);
        throw error;
      });
    this.alertService.success('Live Class Added Successfully');
    console.log('from live');

    return response;
  }

  async validateStreamCode(streamCode) {
    const url = `/live-class/validate-stream-code`;
    const response: any = await this.apiService
      .post(url, { streamCode })
      .toPromise();
    return response;
  }
  async fetchLiveClassById(liveClassId) {
    const url = `/live-class/${liveClassId}`;
    const response: any = await this.apiService.get(url).toPromise();
    return response;
  }
}
