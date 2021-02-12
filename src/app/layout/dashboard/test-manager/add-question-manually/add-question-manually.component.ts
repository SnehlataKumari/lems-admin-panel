import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-add-question-manually',
  templateUrl: './add-question-manually.component.html',
  styleUrls: ['./add-question-manually.component.css']
})
export class AddQuestionManuallyComponent implements OnInit {

  testId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private testService: TestService,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) { }

  get questionFG() {
    return this.fb.group({
      questionTitle: ['', Validators.required],
      explanation: [''],
      tags: ['', Validators.required],
      rightMarks: ['', Validators.required],
      negativeMarks: ['', Validators.required],
      dificultyLevel: ['', Validators.required],
    });
  }

  addQuestionForm = this.fb.group({
    subject: ['', Validators.required],
    topic: ['', Validators.required],
    questionType: ['', Validators.required],
    language: [''],
    // totalQuestions: [0],
    questions: this.fb.array([
      this.questionFG
    ])
  })
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.testId = paramMap.get('testId');
      if (this.testId) {
        this.testService.fetchTestById(this.testId);
      }
    });

    this.testService.$test.subscribe(test => {
      if (this.testId && test && test.questionDetails) {
        this.addQuestionForm.patchValue(test.questionDetails);
      }
    });
  }
  async saveQuestionDetails() {
    await this.testService.updateTest(this.testId, {
      questionDetails: this.addQuestionForm.value
    });
    this.alertService.success('Questions saved successfully!');
    this.router.navigate(['home', this.testId, 'add-question']);
  }

  get questions(): FormArray {
    return this.addQuestionForm.get('questions') as FormArray
  }

}
