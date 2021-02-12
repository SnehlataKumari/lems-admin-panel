import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-setting',
  templateUrl: './test-setting.component.html',
  styleUrls: ['./test-setting.component.css']
})
export class TestSettingComponent implements OnInit {
  testSettingForm: FormGroup;
  testId;
  constructor(
    private activateRoute: ActivatedRoute,
    private testService: TestService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      const testId = paramMap.get('testId');
      this.testId = testId;
      this.testService.fetchTestById(this.testId);
    });

    this.testSettingForm = this.fb.group({
      arrangementAndGroupingRandomQuestion: this.fb.group({
        shuffleQuestionWithSubject: [false],
        groupQuestionSubjectwise: [false],
        optionwiseShuffeling: [false],
      }),
      timeSetting: this.fb.group({
        timeBound: [false],
        clockFormat: [false],
        alloteTimeToEachSection: [false],
        questionWiseTime: [false],
      }),
      generateRank: [false],
      candidateReport: [false],
      multipleAttempt: [false],
      fullScreen: this.fb.group({
        fullScreenMode: [false],
        numberOfAttempts: ['']
      })
    });

    this.testService.$test.subscribe((test) => {
      if (this.testId && test && test.testSettings) {
        this.testSettingForm.patchValue(test.testSettings);
      }
    });
  }

  async onTestSetting() {
    const formData = this.testSettingForm.value;
    await this.testService.updateTest(this.testId, { testSettings: formData });
    this.router.navigate(['home', this.testId, 'add-question']);
  }
}
