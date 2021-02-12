import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImportFileComponent } from './add-import-file.component';

describe('AddImportFileComponent', () => {
  let component: AddImportFileComponent;
  let fixture: ComponentFixture<AddImportFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImportFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImportFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
