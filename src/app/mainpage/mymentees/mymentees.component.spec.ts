/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MymenteesComponent } from './mymentees.component';

describe('MymenteesComponent', () => {
  let component: MymenteesComponent;
  let fixture: ComponentFixture<MymenteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymenteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymenteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
