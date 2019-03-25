import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustomerPage } from './editcustomer.page';

describe('EditcustomerPage', () => {
  let component: EditcustomerPage;
  let fixture: ComponentFixture<EditcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
