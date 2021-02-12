import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamClassComponent } from './live-stream-class.component';

describe('LiveStreamClassComponent', () => {
  let component: LiveStreamClassComponent;
  let fixture: ComponentFixture<LiveStreamClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStreamClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
