import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmentorComponent } from './smentor.component';

describe('SmentorComponent', () => {
  let component: SmentorComponent;
  let fixture: ComponentFixture<SmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
