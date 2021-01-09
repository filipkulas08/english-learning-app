import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePerfectContinousComponent } from './future-perfect-continous.component';

describe('FuturePerfectContinousComponent', () => {
  let component: FuturePerfectContinousComponent;
  let fixture: ComponentFixture<FuturePerfectContinousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturePerfectContinousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePerfectContinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
