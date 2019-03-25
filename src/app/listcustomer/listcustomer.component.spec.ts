import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcustomerPage } from './listcustomer.page';

describe('ListcustomerPage', () => {
  let component: ListcustomerPage;
  let fixture: ComponentFixture<ListcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
