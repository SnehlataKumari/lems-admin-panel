import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {
  addTestForm: FormGroup;
  testId;
  constructor  (
     private fb: FormBuilder,
     private activatedRoute: ActivatedRoute,
     private testService: TestService,
     private router: Router
     ) { }

  ngOnInit(): void {
    this.addTestForm = this.fb.group({
      testName: ['', Validators.required],
      testCode: ['', Validators.required],
      totalNoOfQuestions: [0],
      testInstruction: [''],
      testCategory: [''],
      testDificultyLevel: ['', Validators.required],
      testDurationInMin: ['', Validators.required],
    });

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.testId = paramMap.get('testId');
      if(this.testId) {
        this.testService.fetchTestById(this.testId);
      }
    });


    this.testService.$test.subscribe(test => {
      if (this.testId && test) {
        this.addTestForm.patchValue(test);
      }
    });
  }
// -----------------------------Via Admin Panel--------------------------------------------
  async onAddTest() {
    const formData = this.addTestForm.value; 
    if (this.testId) {
      await this.testService.updateTest(this.testId, formData);
      this.router.navigate(['home', this.testId, 'test-setting']);
    } else {
      return this.testService.addTest(formData);
    }
  }
// routerLink="/home/test-setting"
}
