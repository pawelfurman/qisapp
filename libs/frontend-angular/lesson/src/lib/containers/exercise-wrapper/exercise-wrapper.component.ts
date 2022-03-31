import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExerciseSelectors } from '../../feature/exercise/exercise.selectors';
import { ExerciseStore } from '../../feature/exercise/exercise.store';
import { ExerciseEngineService } from '../../utils/exercise-engine.service';

@Component({
  selector: 'fa-exercise-wrapper',
  templateUrl: './exercise-wrapper.component.html',
  styleUrls: ['./exercise-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExerciseSelectors]
})
export class ExerciseWrapperComponent implements OnInit {

  vm$ = this.exreciseWrapperStore.exerciseWrapperVm$;

  constructor(
    private exerciseStore: ExerciseStore,
    private exreciseWrapperStore: ExerciseSelectors,
    private exerciseEngine: ExerciseEngineService) { }

  ngOnInit(): void {
    this.exerciseStore.prepareToGuess()
  }

  onCheckAnswer(answers: [string, string]){
    const isCorrect = this.exerciseEngine.compareAnswers(answers[0], answers[1])
    isCorrect ? this.exerciseStore.correctAnswer() : this.exerciseStore.incorrectAnswer()
  }

  onSkipAnswer(){
    this.exerciseStore.correctAnswer()
  }
}
