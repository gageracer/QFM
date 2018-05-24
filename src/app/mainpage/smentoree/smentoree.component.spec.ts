import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmentoreeComponent } from './smentoree.component';

describe('SmentoreeComponent', () => {
  let component: SmentoreeComponent;
  let fixture: ComponentFixture<SmentoreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmentoreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmentoreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
