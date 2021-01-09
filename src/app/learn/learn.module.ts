import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import {
  SpeechSynthesisModule,
} from '@kamiazya/ngx-speech-synthesis';

import { LearnRoutingModule } from './learn-routing.module';
import { WordComponent } from './word/word.component';
import { TestComponent } from './test/test.component';
import { CrosswordHumanComponent } from './crossword-human/crossword-human.component';
import { CrosswordFoodComponent } from './crossword-food/crossword-food.component';
import { CrosswordSchoolComponent } from './crossword-school/crossword-school.component';
import { CrosswordHouseComponent } from './crossword-house/crossword-house.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { PresentSimpleComponent } from './grammar/present-simple/present-simple.component';
import { PresentContinousComponent } from './grammar/present-continous/present-continous.component';
import { PresentPerfectComponent } from './grammar/present-perfect/present-perfect.component';
import { PresentPerfectContinousComponent } from './grammar/present-perfect-continous/present-perfect-continous.component';
import { PastSimpleComponent } from './grammar/past-simple/past-simple.component';
import { PastContinousComponent } from './grammar/past-continous/past-continous.component';
import { PastPerfectComponent } from './grammar/past-perfect/past-perfect.component';
import { PastPerfectContinousComponent } from './grammar/past-perfect-continous/past-perfect-continous.component';
import { FutureSimpleComponent } from './grammar/future-simple/future-simple.component';
import { FutureContinousComponent } from './grammar/future-continous/future-continous.component';
import { FuturePerfectComponent } from './grammar/future-perfect/future-perfect.component';
import { FuturePerfectContinousComponent } from './grammar/future-perfect-continous/future-perfect-continous.component';


@NgModule({
  declarations: [WordComponent, TestComponent, CrosswordHumanComponent, CrosswordFoodComponent, CrosswordSchoolComponent, CrosswordHouseComponent, PresentSimpleComponent, PresentContinousComponent, PresentPerfectComponent, PresentPerfectContinousComponent, PastSimpleComponent, PastContinousComponent, PastPerfectComponent, PastPerfectContinousComponent, FutureSimpleComponent, FutureContinousComponent, FuturePerfectComponent, FuturePerfectContinousComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    CommonModule,FormsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzGridModule,
    NzRadioModule,
    NzTabsModule,
    SpeechSynthesisModule.forRoot({
      lang: 'en',
      volume: 2.0,
      pitch: 1.0,
      rate: 1.0,
    }),],
    exports: [WordComponent,TestComponent,CrosswordHumanComponent],
  
})
export class LearnModule { }
