import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpasswordchangeComponent } from './firstpasswordchange.component';

describe('FirstpasswordchangeComponent', () => {
  let component: FirstpasswordchangeComponent;
  let fixture: ComponentFixture<FirstpasswordchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstpasswordchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpasswordchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
