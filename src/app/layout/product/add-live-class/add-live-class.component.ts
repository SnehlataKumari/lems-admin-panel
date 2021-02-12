import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';
import { LiveClassService } from 'src/app/services/liveClass.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UploadFileService } from 'src/app/services/upload-file.service';
declare var $:any;
@Component({
  selector: 'app-add-live-class',
  templateUrl: './add-live-class.component.html',
  styleUrls: ['./add-live-class.component.css']
})
export class AddLiveClassComponent implements OnInit {

  addLiveClassForm: FormGroup;
  progress: number;
  uploadPosterId: any;
  message: string;
  isSubmitting = false;
  allTeachers;

  constructor(
    private fb: FormBuilder,
    private liveClassService: LiveClassService,
    private uploadService: UploadFileService,
    private alertService: AlertService,
    private teachersService: TeacherService
  ) { }

  ngOnInit(): void {

    this.addLiveClassForm = this.fb.group({
      isDemoClass: [false],
      title: ['', Validators.required],
      streamCode: ['', Validators.required, this.validateStreamCode.bind(this)],
      description: ['', Validators.required],
      testId: ['', Validators.required],
      assignedMentor: ['', Validators.required],
      classStartTime: ['', Validators.required],
      date: ['', [Validators.required, this.validateDate.bind(this)]],
      classEndTime: ['', Validators.required],
      approxStreamTime: ['', [Validators.required]],
      allowedNoOfStudents: ['', Validators.required],
      allowedNoOfDemoStudents: ['', Validators.required],
      selectedGroup: ['', Validators.required],
    });

    this.getAllTeachers();
  }
 
  single;
  singleFiles(event) {
    var singleFiles = event.target.files;
    this.single = singleFiles[0];

    if (singleFiles) {
      for (var file of singleFiles) {
        var singleReader = new FileReader();
        singleReader.onload = (e) => {
          $(event.target)
            .closest('.img')
            .find('.imagefile')
            .attr('src', e.target.result)
            .show();
        };
        singleReader.readAsDataURL(file);
      }
    }
  }

  async onAddLiveClass() {
  
    if (this.addLiveClassForm.invalid) {
      this.addLiveClassForm.markAllAsTouched();
      this.addLiveClassForm.updateValueAndValidity();
      return;
    }

    this.isSubmitting = true;

    let formData = this.addLiveClassForm.value;
    formData = JSON.parse(JSON.stringify(formData));

    if (this.single) {
      this.uploadService.upload(this.single).subscribe(
        async (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            const reqBody = {
              posterDocumentId: event.body['_id'],
              ...formData,
            };

            await this.createLiveClass(reqBody);
            this.isSubmitting = false;
          }
        },
        (err) => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.single = undefined;
        }
      );
      this.single = undefined;
    } else {
      this.createLiveClass(formData);
    }
  }

  async createLiveClass(formData) {
    console.log(formData);
    // routerLink = "/product/live-stream"
    return this.liveClassService.addLiveClass(formData).catch((error) => {
      this.alertService.error(error.message);
      this.isSubmitting = false;
    });
  }

  async validateStreamCode(control: AbstractControl) {
    const isValid = await this.liveClassService.validateStreamCode(
      control.value
    );
    return isValid ? null : { streamCodeNotUnique: 'Stream Code is dublicate' };
  }

  validateDate(control: AbstractControl) {
    // return null;
    return moment().isSameOrBefore(moment(control.value)) ? null : {beforeDate: 'You can not request on past date.'};
  }

  async getAllTeachers() {
    const response = await this.teachersService.getAllTeachers();
    const teachers = response['data'];
    this.allTeachers = teachers;
    console.log(this.allTeachers);
    
  }
}
