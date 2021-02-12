import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecideCostComponent } from './decide-cost.component';

describe('DecideCostComponent', () => {
  let component: DecideCostComponent;
  let fixture: ComponentFixture<DecideCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecideCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecideCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
