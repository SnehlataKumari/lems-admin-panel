import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClassesRequestComponent } from './live-classes-request.component';

describe('LiveClassesRequestComponent', () => {
  let component: LiveClassesRequestComponent;
  let fixture: ComponentFixture<LiveClassesRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveClassesRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveClassesRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
