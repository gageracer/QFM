import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmenteesComponent } from './fmentees.component';

describe('FmenteesComponent', () => {
  let component: FmenteesComponent;
  let fixture: ComponentFixture<FmenteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmenteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmenteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
