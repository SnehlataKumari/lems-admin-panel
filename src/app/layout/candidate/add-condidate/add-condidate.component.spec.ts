import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCondidateComponent } from './add-condidate.component';

describe('AddCondidateComponent', () => {
  let component: AddCondidateComponent;
  let fixture: ComponentFixture<AddCondidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCondidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCondidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
