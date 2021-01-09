import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureSimpleComponent } from './future-simple.component';

describe('FutureSimpleComponent', () => {
  let component: FutureSimpleComponent;
  let fixture: ComponentFixture<FutureSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
