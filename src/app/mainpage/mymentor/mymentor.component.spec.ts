/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MymentorComponent } from './mymentor.component';

describe('MymentorComponent', () => {
  let component: MymentorComponent;
  let fixture: ComponentFixture<MymentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
