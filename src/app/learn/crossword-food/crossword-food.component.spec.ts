import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordFoodComponent } from './crossword-food.component';

describe('CrosswordFoodComponent', () => {
  let component: CrosswordFoodComponent;
  let fixture: ComponentFixture<CrosswordFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
