import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionPreviewComponent } from './instruction-preview.component';

describe('InstructionPreviewComponent', () => {
  let component: InstructionPreviewComponent;
  let fixture: ComponentFixture<InstructionPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
