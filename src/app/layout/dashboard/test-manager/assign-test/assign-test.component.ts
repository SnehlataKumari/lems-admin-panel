import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from 'src/app/services/test.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

const accessGroupList = [
 '1st Year',
 '2nd Year',
 '3rd Year',
 '4th Year',
  '5th Year',
  '6th Year',
  '7th Year',
  '8th Year',
  '9th Year',
  '10th Year',
];

const assignToProductList = [
  '1st Test Series',
  '2nd Test Series',
  '3rd Test Series',
  '4th Test Series',
  '5th Test Series',
  '6th Test Series',
  '7th Test Series',
  '8th Test Series',
  '9th Test Series',
  '10th Test Series',
  '11th Test Series',
  '12th Test Series',
  '13th Test Series',
  '14th Test Series',
  '15th Test Series'
];
@Component({
  selector: 'app-assign-test',
  templateUrl: './assign-test.component.html',
  styleUrls: ['./assign-test.component.css']
})
export class AssignTestComponent implements OnInit {

  testId;
  assignTestForm
  accessGroup = accessGroupList;
  assignToProduct = assignToProductList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private testService: TestService,
    private fb: FormBuilder,
    private formSerivce: FormService,
    private router: Router,
  ) { }

  
 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.testId = paramMap.get('testId');
      if (this.testId) {
        this.testService.fetchTestById(this.testId);
      }
    });
    const accessGroupList = this.formSerivce.getFGFromArray(this.accessGroup);
    const assignToProductList = this.formSerivce.getFGFromArray(this.assignToProduct);

    this.assignTestForm = this.fb.group({
      activeLinks: this.fb.group({
        disableAllLinks: false,
        emailLinkToTestTaker: '',
        addLinkToTestOnYourWebsite: '',
        externalStudyLink: '',
        accessCommonCode: false
      }),
      assignToGroup: accessGroupList,
      assignToProduct: assignToProductList
    });

    this.testService.$test.subscribe(test => {
      if (this.testId && test && test.assignTestDetails) {
        this.assignTestForm.patchValue(test.assignTestDetails);
      }
    });

  }
 

  // routerLink = "/home/{{this.testId}}/publish-test"
 async  onSubmit( ) {
    console.log(this.assignTestForm.value);
    const formData = this.assignTestForm.value;
   await this.testService.updateTest(this.testId, { assignTestDetails: formData });
    this.router.navigate(['home', this.testId, 'publish-test']);
  }
  

}
