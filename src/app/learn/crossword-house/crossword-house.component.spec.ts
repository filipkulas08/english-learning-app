import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordHouseComponent } from './crossword-house.component';

describe('CrosswordHouseComponent', () => {
  let component: CrosswordHouseComponent;
  let fixture: ComponentFixture<CrosswordHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
