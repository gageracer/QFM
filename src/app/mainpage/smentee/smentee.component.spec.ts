import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmenteeComponent } from './smentee.component';

describe('SmenteeComponent', () => {
  let component: SmenteeComponent;
  let fixture: ComponentFixture<SmenteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmenteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
