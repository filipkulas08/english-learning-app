import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordSchoolComponent } from './crossword-school.component';

describe('CrosswordSchoolComponent', () => {
  let component: CrosswordSchoolComponent;
  let fixture: ComponentFixture<CrosswordSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
