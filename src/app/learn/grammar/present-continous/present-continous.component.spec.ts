import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentContinousComponent } from './present-continous.component';

describe('PresentContinousComponent', () => {
  let component: PresentContinousComponent;
  let fixture: ComponentFixture<PresentContinousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentContinousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentContinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
