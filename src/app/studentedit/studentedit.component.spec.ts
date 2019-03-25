import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenteditPage } from './studentedit.page';

describe('StudenteditPage', () => {
  let component: StudenteditPage;
  let fixture: ComponentFixture<StudenteditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudenteditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenteditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
