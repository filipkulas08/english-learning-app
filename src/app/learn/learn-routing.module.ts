import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrosswordHumanComponent } from './crossword-human/crossword-human.component';
import { TestComponent } from './test/test.component';
import { WordComponent } from './word/word.component';
import { CrosswordFoodComponent } from './crossword-food/crossword-food.component';
import { CrosswordSchoolComponent} from './crossword-school/crossword-school.component';
import { CrosswordHouseComponent} from './crossword-house/crossword-house.component';
import { PresentContinousComponent } from './grammar/present-continous/present-continous.component';
import { PresentPerfectContinousComponent } from './grammar/present-perfect-continous/present-perfect-continous.component';
import { PresentPerfectComponent } from './grammar/present-perfect/present-perfect.component';
import { PresentSimpleComponent } from './grammar/present-simple/present-simple.component';
import { PastContinousComponent } from './grammar/past-continous/past-continous.component';
import { PastPerfectContinousComponent } from './grammar/past-perfect-continous/past-perfect-continous.component';
import { PastPerfectComponent } from './grammar/past-perfect/past-perfect.component';
import { PastSimpleComponent } from './grammar/past-simple/past-simple.component';
import { FutureContinousComponent } from './grammar/future-continous/future-continous.component';
import { FuturePerfectContinousComponent } from './grammar/future-perfect-continous/future-perfect-continous.component';
import { FuturePerfectComponent } from './grammar/future-perfect/future-perfect.component';
import { FutureSimpleComponent } from './grammar/future-simple/future-simple.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/words' },
  { path: 'word', component: WordComponent },
  { path: 'test', component: TestComponent },
  { path: 'crossword-human', component: CrosswordHumanComponent },
  { path: 'crossword-food', component: CrosswordFoodComponent },
  { path: 'crossword-school', component: CrosswordSchoolComponent },
  { path: 'crossword-house', component: CrosswordHouseComponent },
  { path: 'present-simple', component: PresentSimpleComponent },
  { path: 'present-continuous', component: PresentContinousComponent },
  { path: 'present-perfect', component: PresentPerfectComponent },
  { path: 'present-perfect-continuous', component: PresentPerfectContinousComponent },
  { path: 'past-simple', component: PastSimpleComponent },
  { path: 'past-continuous', component: PastContinousComponent },
  { path: 'past-perfect', component: PastPerfectComponent },
  { path: 'past-perfect-continuous', component: PastPerfectContinousComponent },
  { path: 'future-simple', component: FutureSimpleComponent },
  { path: 'future-continuous', component: FutureContinousComponent },
  { path: 'future-perfect', component: FuturePerfectComponent },
  { path: 'future-perfect-continuous', component: FuturePerfectContinousComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
