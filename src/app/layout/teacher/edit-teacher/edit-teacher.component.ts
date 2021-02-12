
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';
import { merge, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
declare var $: any;
declare var iEdit: any;

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
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  teacherId;
  editTeacherForm: FormGroup;
  resumeFile: File;
  internetConnectionFile: File;
  subjects = subjectsList;
  gradeRangeList = gradeRangeList;
  boardsList = boardsList;
  availableTimes = availableTimes;
  termsAndConditions = new FormControl(false);
  selectedProfileImg: any;
  $teacher = new BehaviorSubject(null);
  $user = new BehaviorSubject(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private teacherService: TeacherService,
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

  //   changePasswordForm = this.fb.group({
  //   oldPassword: ['', Validators.required],
  //   newPassword: ['', Validators.required],
  //   confirmPassword: ['', Validators.required]
  // });

  ngOnInit() {
  
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.teacherId = paramMap.get('teacherId');
      this.teacherService.getTeacherById(this.teacherId).subscribe((response) => {
        const {teacher, user} = response['data'];
        this.$teacher.next(teacher);
        this.$user.next(user);
      });
    })
    const profileComp = this;
    $(document).on("change", ".fileInput", function (e2: { target: { files: any[]; }; }) {
      const img1 = e2.target.files[0];
      console.log(img1);

      this.images = img1
      if (!iEdit.open(img1, true, (res1: any) => {
        profileComp.selectedProfileImg = res1;
        $(e2.target).closest('.profile-img').find(".result").attr("src", res1);
      })) {
        this.alertService.console.error("Whoops! That is not an image!");
      }
    });
    
    const primarySubjectsFG = this.getFGFromArray(this.subjects);
    const secondarySubjectsFG = this.getFGFromArray(this.subjects);
    const gradeToTeachFG = this.getFGFromArray(this.gradeRangeList);
    const boardFG = this.getFGFromArray(this.boardsList);
    const availableTimesFG = this.getFGFromArray(this.availableTimes);
    const teachingHoursFG = this.fb.group({
      weekdays: '',
      weekends: ''
    });

    this.editTeacherForm = this.fb.group({
      user: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: [''],
        email: ['', [Validators.required, Validators.email]],
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
      })
    });
    merge(
      this.$teacher,
      this.$user
    ).subscribe(() => {
      this.populateDummyData(this.$user.value, this.$teacher.value);
    });
  }
  
  onSelectResume(resume: File) {
    this.resumeFile = resume;
  }

  onInterConnectionFile(internetConnectionFile: File) {
    this.internetConnectionFile = internetConnectionFile;
  }

  populateDummyData(user, teacher) {
    if(!teacher || !user) {
      return;
    }
    
    const dummtData = {
      "user": user || {},
      "teacher": teacher || {}
    };
    this.editTeacherForm.patchValue(dummtData);
  }

  //   onChangePassword() {
  //   const formData = this.changePasswordForm.value;
  //   this.authService.changePassword(formData);
  // }

  onSubmit() {
    let formData = this.editTeacherForm.value;
    if (this.selectedProfileImg) {
      formData = {
        ...formData, user: {
          ...formData.user,
          profileImage: this.selectedProfileImg
        }
      }
    }

    this.authService.updateTeacherProfileByAdmin(this.teacherId, formData);
  }

}
