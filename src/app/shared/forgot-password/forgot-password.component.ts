import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
// import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required],
    });
  }
  
  onforgotAdminPassword(){
    const formData = this.forgotPasswordForm.value;
    this.authService.forgotAdminPassword(formData);
  }
}
