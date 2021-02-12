import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedFileComponent } from './imported-file.component';

describe('ImportedFileComponent', () => {
  let component: ImportedFileComponent;
  let fixture: ComponentFixture<ImportedFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportedFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
