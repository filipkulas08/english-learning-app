import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPerfectContinousComponent } from './past-perfect-continous.component';

describe('PastPerfectContinousComponent', () => {
  let component: PastPerfectContinousComponent;
  let fixture: ComponentFixture<PastPerfectContinousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPerfectContinousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPerfectContinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
