import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastContinousComponent } from './past-continous.component';

describe('PastContinousComponent', () => {
  let component: PastContinousComponent;
  let fixture: ComponentFixture<PastContinousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastContinousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastContinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
