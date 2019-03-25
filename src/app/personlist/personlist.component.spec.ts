import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonlistPage } from './personlist.page';

describe('PersonlistPage', () => {
  let component: PersonlistPage;
  let fixture: ComponentFixture<PersonlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
