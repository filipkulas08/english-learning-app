import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureContinousComponent } from './future-continous.component';

describe('FutureContinousComponent', () => {
  let component: FutureContinousComponent;
  let fixture: ComponentFixture<FutureContinousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureContinousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureContinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
