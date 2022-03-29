import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Question } from '../../frontend-angular-lesson.types';

@Component({
  selector: 'fa-exercise-previous-question',
  templateUrl: './exercise-previous-question.component.html',
  styleUrls: ['./exercise-previous-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercisePreviousQuestionComponent {

  collocationArray!: {first: string[], second: string[]}

  private _question!: Question
  @Input() set question(value: Question){
    if(value){
      this._question = value
      this.collocationArray = {
        first: value?.firstValueCollocation.split(','),
        second: value?.secondValueCollocation?.split(',')
      }
    }
  }
  get question(){
    return this._question
  }

  @Input() isCorrect!: boolean

}
