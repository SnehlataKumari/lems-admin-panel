import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/utils';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

declare var $: any;
@Component({
  selector: 'app-candidate-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userRegistrationForm: FormGroup;
  studentId;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private authService: AuthService,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(async (paramMap) => {
      this.studentId = paramMap.get('studentId');
      // this.studentService
      const student = await this.studentService.fetchStudentById(this.studentId);
      this.populateForm(student);
    });

    this.userRegistrationForm = this.fb.group({
        firstName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(this.mobNumberPattern)]],
        grade: ['', Validators.required]
    }, {
        validators: passwordMatchValidator('password', 'confirmPassword')
    });
  }

  populateForm(student) {
    this.userRegistrationForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(this.mobNumberPattern)]],
      grade: ['', Validators.required]
    });
    const education = student.education || {};
    this.userRegistrationForm.patchValue({ ...student.userId, ...education});
  }

  onSubmit() {
    const formValue = this.userRegistrationForm.value;
    if(this.studentId) {
      this.authService.updateStudent(this.studentId, formValue);
    } else {
      this.authService.registerNewStudent(formValue);
    }
  }

}
