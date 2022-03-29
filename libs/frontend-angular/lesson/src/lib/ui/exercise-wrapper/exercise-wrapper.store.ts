import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { map, pairwise, startWith } from 'rxjs';
import { ExerciseEngineService } from '../../feature/exercise/exercise-engine.service';
import { ExerciseStore } from './../../feature/exercise/exercise.store';

export type ExerciseWrapperState = Record<string, never>

const initialState: ExerciseWrapperState = {};

@Injectable()
export class ExerciseWrapperStore extends ComponentStore<ExerciseWrapperState> {
  constructor(private exerciseStore: ExerciseStore, private exerciseEngine: ExerciseEngineService) {
    super(initialState);
  }


  /** Selectors */

  goodAnswers$ = this.select(this.exerciseStore.correctAnswers$, (size) => size)
  wrongAnswers$ = this.select(this.exerciseStore.wrongAnswers$, (size) => size)

  allTries$ = this.select(this.goodAnswers$, this.wrongAnswers$, (good, wrong) => good + wrong)
  allToGuess$ = this.select(    
    this.exerciseStore.guessedSize$,
    this.exerciseStore.toGuessSize$,
    (guessed, toGuess) => guessed + toGuess
  )

  progress$ = this.select(
    this.goodAnswers$,
    this.allToGuess$,
    (goodAnswers, allToGuess) => goodAnswers / allToGuess 
  )
  effectiveness$ = this.select(
    this.goodAnswers$,
    this.wrongAnswers$,
    this.allToGuess$,
    (goodAnswers, wrongAnswers, allToGuess) => (goodAnswers > wrongAnswers ? goodAnswers-wrongAnswers : 0) / allToGuess
  )
  allQuestions$ = this.select(
    this.exerciseStore.questionsSize$,
    this.exerciseStore.repetition$,
    (questionSize, repetition) => questionSize * repetition
  )

  currentQuestion$ = this.select(
    this.exerciseStore.questions$,
    this.exerciseStore.toGuess$,
    this.exerciseStore.reverse$,
    (questions, toGuess, reverse) => {
      const q = this.exerciseEngine.findQuestion(toGuess[0], questions);
      if(!q){
        return undefined
      }

      return !reverse ? this.exerciseEngine.prepareQuestion(q) : this.exerciseEngine.prepareReverseQuestion(q)
    }
  )


  previousQuestion$ = this.currentQuestion$.pipe(
    startWith(undefined),
    pairwise(),
    map(([previous, _]) => previous)
  )

  
  readonly vm$ = this.select(
    this.goodAnswers$,
    this.wrongAnswers$,
    this.allTries$,
    this.allToGuess$,
    this.progress$,
    this.effectiveness$,
    this.allQuestions$,
    this.currentQuestion$,
    this.previousQuestion$,
    this.exerciseStore.lastAnswerCorrectness$,
    ( 
      goodAnswers,
      wrongAnswers,
      allTries,
      allToGuess, 
      progress,
      effectiveness,
      allQuestions,
      currentQuestion,
      previousQuestion,
      previousQuestionCorrectness
    ) => {
      return {
        goodAnswers,
        wrongAnswers,
        allTries,
        allToGuess,
        progress,
        effectiveness,
        allQuestions,
        currentQuestion,
        previousQuestion,
        previousQuestionCorrectness
      }
    }
  )
}
