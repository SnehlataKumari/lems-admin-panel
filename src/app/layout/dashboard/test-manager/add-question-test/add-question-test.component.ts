import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-add-question-test',
  templateUrl: './add-question-test.component.html',
  styleUrls: ['./add-question-test.component.css']
})
export class AddQuestionTestComponent implements OnInit {

  testId;
  constructor(
    private activateRoute: ActivatedRoute,
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      const testId = paramMap.get('testId');
      this.testId = testId;
      this.testService.fetchTestById(testId);
    });
  }

}
