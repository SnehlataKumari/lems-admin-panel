import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorReportComponent } from './color-report.component';

describe('ColorReportComponent', () => {
  let component: ColorReportComponent;
  let fixture: ComponentFixture<ColorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
