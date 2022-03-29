import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ExerciseStore } from '../../feature/exercise/exercise.store';
import { ExerciseWrapperStore } from './exercise-wrapper.store';

@Component({
  selector: 'fa-exercise-wrapper',
  templateUrl: './exercise-wrapper.component.html',
  styleUrls: ['./exercise-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExerciseWrapperStore]
})
export class ExerciseWrapperComponent implements OnInit {

  questionsToGuess$ = this.exerciseStore.toGuess$
  guessed$ = this.exerciseStore.guessed$

  vm$ = this.exreciseWrapperStore.vm$;

  constructor(private exerciseStore: ExerciseStore, private exreciseWrapperStore: ExerciseWrapperStore) { }

  ngOnInit(): void {
    this.exerciseStore.prepareToGuess()

  }

  correctAnswer(){
    this.exerciseStore.correctAnswer()
  }

  incorrectAnswer(){
    this.exerciseStore.incorrectAnswer()
  }

}
