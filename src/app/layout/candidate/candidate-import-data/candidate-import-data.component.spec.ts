import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateImportDataComponent } from './candidate-import-data.component';

describe('CandidateImportDataComponent', () => {
  let component: CandidateImportDataComponent;
  let fixture: ComponentFixture<CandidateImportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateImportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateImportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
