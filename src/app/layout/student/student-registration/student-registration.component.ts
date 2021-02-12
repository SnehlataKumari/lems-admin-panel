import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { FormService } from 'src/app/services/form.service';

declare var $: any;
@Component({
  selector: 'app-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  userRegistrationForm: FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private authService: AuthService,
    private formService: FormService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.userRegistrationForm = this.fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(this.mobNumberPattern)]],
      grade: ['', Validators.required]
    });


  }

  onSubmit() {
    const formValue = this.userRegistrationForm.value;
    this.authService.studentRegistration(formValue);
  }

}
