import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWhiteReportComponent } from './black-white-report.component';

describe('BlackWhiteReportComponent', () => {
  let component: BlackWhiteReportComponent;
  let fixture: ComponentFixture<BlackWhiteReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackWhiteReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackWhiteReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
