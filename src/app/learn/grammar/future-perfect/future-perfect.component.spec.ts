import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePerfectComponent } from './future-perfect.component';

describe('FuturePerfectComponent', () => {
  let component: FuturePerfectComponent;
  let fixture: ComponentFixture<FuturePerfectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturePerfectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePerfectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
