import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaddPage } from './studentadd.page';

describe('StudentaddPage', () => {
  let component: StudentaddPage;
  let fixture: ComponentFixture<StudentaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
