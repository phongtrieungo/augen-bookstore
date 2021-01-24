/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookstoreListComponent } from './bookstore-list.component';

describe('BookstoreListComponent', () => {
  let component: BookstoreListComponent;
  let fixture: ComponentFixture<BookstoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
