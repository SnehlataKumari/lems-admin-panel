import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionManuallyComponent } from './add-question-manually.component';

describe('AddQuestionManuallyComponent', () => {
  let component: AddQuestionManuallyComponent;
  let fixture: ComponentFixture<AddQuestionManuallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionManuallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
