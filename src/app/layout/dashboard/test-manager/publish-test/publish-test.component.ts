import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { AlertService } from 'src/app/services/alert.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-publish-test',
  templateUrl: './publish-test.component.html',
  styleUrls: ['./publish-test.component.css']
})
export class PublishTestComponent implements OnInit {

  testId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private testService: TestService,
    private router: Router,
    private alertService: AlertService,
    private fb: FormBuilder,
  ) { }

  publishForm = this.fb.group({
    isPublished: [false],
    startDate: ['', Validators.required],
    startTime: ['', Validators.required],
    endDate: ['', Validators.required],
    endTime: ['', Validators.required],
  })
  ngOnInit(): void {
    this.fetchTestDetails();
  }

  fetchTestDetails() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.testId = paramMap.get('testId');
      if (this.testId) {
        this.testService.fetchTestById(this.testId);
      }
    });

    this.testService.$test.subscribe(test => {
      if (this.testId && test && test.publishDetails) {
        this.publishForm.patchValue(test.publishDetails);
      }
    });
  }
  async onFormSubmit() {
    const formValueStr = JSON.stringify(this.publishForm.value, null, 2);
    const formValue = JSON.parse(formValueStr);
    await this.testService.updateTest(this.testId, {
      publishDetails: formValue
    });

    this.alertService.success('Publish details saved successfully!');
    this.router.navigate(['home','test'])

  }
}
