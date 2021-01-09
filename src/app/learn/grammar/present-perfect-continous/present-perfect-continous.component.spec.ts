import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPerfectContinousComponent } from './present-perfect-continous.component';

describe('PresentPerfectContinousComponent', () => {
  let component: PresentPerfectContinousComponent;
  let fixture: ComponentFixture<PresentPerfectContinousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentPerfectContinousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentPerfectContinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
