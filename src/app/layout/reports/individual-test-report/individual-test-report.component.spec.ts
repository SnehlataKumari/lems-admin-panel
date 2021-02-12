import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTestReportComponent } from './individual-test-report.component';

describe('IndividualTestReportComponent', () => {
  let component: IndividualTestReportComponent;
  let fixture: ComponentFixture<IndividualTestReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualTestReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
