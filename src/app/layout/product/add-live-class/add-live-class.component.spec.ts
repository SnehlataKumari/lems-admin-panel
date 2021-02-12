import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLiveClassComponent } from './add-live-class.component';

describe('AddLiveClassComponent', () => {
  let component: AddLiveClassComponent;
  let fixture: ComponentFixture<AddLiveClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLiveClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLiveClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
