
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';

const subjectsList = [
  'Math',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'English',
  'Hindi',
  'Sanskrit',
  'German',
  'French',
  'Social Studies',
  'EVS',
  'Bussiness Studies',
  'Accountancy',
  'Arabic',
  'Others'
];

const gradeRangeList = [
  '1 to 5',
  '6 to 8',
  '9 & 10',
  '11 & 12 (Regular Curriculum)',
  '11 & 12 (JEE Mains Level)',
  'Others',
];

const availableTimes = [
  '6-7 am',
  '7-8 am',
  '8-9 am',
  '2-3 pm',
  '3-4 pm',
  '4-5 pm',
  '6-7 pm',
  '8-9 pm',
  '8-9 pm',
  'Full Time',
];

const boardsList = [
  'CBSC',
  'ICSC',
  'IGCSE',
  'Others',
];

declare var $: any;
@Component({
  selector: 'app-registration-request',
  templateUrl: './add-new-teacher.component.html',
  styleUrls: ['./add-new-teacher.component.css']
})
export class AddNewTeacherComponent implements OnInit  {

  registrationForm: FormGroup;
  resumeFile: File;
  internetConnectionFile: File;
  subjects = subjectsList;
  gradeRangeList = gradeRangeList;
  boardsList = boardsList;
  availableTimes = availableTimes;
  termsAndConditions = new FormControl(false);
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private formService: FormService,
    private fb: FormBuilder
  ) { }

  // FIXME: Apply validator to check that atleast one value is selected!
  getFGFromArray(itemList: any[]): FormGroup {
    const itemObj = itemList.reduce((prevObj, value) => {
      prevObj[value] = false;
      return prevObj;
    }, {});
    return this.fb.group(itemObj);
  }

  ngOnInit() {
    const primarySubjectsFG = this.getFGFromArray(this.subjects);
    const secondarySubjectsFG = this.getFGFromArray(this.subjects);
    const gradeToTeachFG = this.getFGFromArray(this.gradeRangeList);
    const boardFG = this.getFGFromArray(this.boardsList);
    const availableTimesFG = this.getFGFromArray(this.availableTimes);
    const teachingHoursFG = this.fb.group({
      weekdays: '',
      weekends: ''
    });

    this.registrationForm = this.fb.group({
      user: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: [''],
        email: ['',[ Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern(this.mobNumberPattern)]],
      }),
      teacher: this.fb.group({
        highestQualification: [''],
        collegeDetails: ['', Validators.required],
        teachingExperience: ['', Validators.required],
        primaryTeachingSubjects: primarySubjectsFG,
        secondaryTeachingSubjects: secondarySubjectsFG,
        gradeToTeach: gradeToTeachFG,
        board: boardFG,
        teachingHours: teachingHoursFG,
        availableTimes: availableTimesFG,
        currentOccupation: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        typeOfInternetConnection: ['', Validators.required],
        downloadSpeed: ['', Validators.required],
        uploadSpeed: ['', Validators.required],
        associationWithLems: ['', Validators.required],
        location: ['', Validators.required],
        howKnowLemsAcademy: ['', Validators.required],
        termsAndConditions: [true, Validators.required],
        hasAcceptedRegistrationRequest: true
      })
    });

    // this.populateDummyData();
  }

  onSelectResume(resumeFile: File) {
    this.resumeFile = resumeFile;
  }

  onInterConnectionFile(internetConnectionFile: File) {
    this.internetConnectionFile = internetConnectionFile;
  }


  populateDummyData() {
    const dummtData = {
      "user": {
        "firstName": "asd",
        "lastName": "asdsf",
        "gender": "MALE",
        "email": "sadf@clik.ai",
        "phone": "9643284054"
      },
      "teacher": {
        "highestQualification": "choose1",
        "collegeDetails": "teaching",
        "teachingExperience": "option2",
        "primaryTeachingSubjects": {
          "Math": false,
          "Physics": false,
          "Chemistry": true,
          "Biology": true,
          "Computer Science": false,
          "English": false,
          "Hindi": false,
          "Sanskrit": false,
          "German": false,
          "French": false,
          "Social Studies": false,
          "EVS": false,
          "Bussiness Studies": false,
          "Accountancy": false,
          "Arabic": false,
          "Others": false
        },
        "secondaryTeachingSubjects": {
          "Math": true,
          "Physics": true,
          "Chemistry": false,
          "Biology": false,
          "Computer Science": false,
          "English": false,
          "Hindi": false,
          "Sanskrit": false,
          "German": false,
          "French": false,
          "Social Studies": false,
          "EVS": false,
          "Bussiness Studies": false,
          "Accountancy": false,
          "Arabic": false,
          "Others": false
        },
        "gradeToTeach": {
          "1 to 5": true,
          "6 to 8": true,
          "9 & 10": false,
          "11 & 12 (Regular Curriculum)": false,
          "11 & 12 (JEE Mains Level)": false,
          "Others": false
        },
        "board": {
          "CBSC": false,
          "ICSC": true,
          "IGCSE": false,
          "Others": false
        },
        "teachingHours": {
          "weekdays": "1 hours",
          "weekends": "1 hours"
        },
        "availableTimes": {
          "6-7 am": false,
          "7-8 am": true,
          "8-9 am": true,
          "2-3 pm": false,
          "3-4 pm": false,
          "4-5 pm": false,
          "6-7 pm": false,
          "8-9 pm": false,
          "Full Time": false
        },
        "currentOccupation": "College Student",
        "dateOfBirth": "1998-10-22T18:30:00.000Z",
        "typeOfInternetConnection": "Dongle",
        "downloadSpeed": "Others",
        "uploadSpeed": "2 Mbps",
        "associationWithLems": "Additional source of income",
        "location": "nhgcmhgcmhb",
        "howKnowLemsAcademy": "hgchmgc,jchg",
        "termsAndConditions": true
      }
    };

    this.registrationForm.patchValue(dummtData);
  }

  onSubmit() {
    // if (!this.termsAndConditions.value) {
    //   return this.alertService.error('Please accept terms and condition!');
    // }
    let formValue = this.registrationForm.value;
    formValue = JSON.parse(JSON.stringify(formValue));
    const formData = this.formService.jsonToFormData(formValue);
    formData.append('resumeFile', this.resumeFile);
    formData.append('internetConnectionFile', this.internetConnectionFile);
    this.authService.addNewTeacher(formData);
  }

}
