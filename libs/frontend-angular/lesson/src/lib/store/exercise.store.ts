import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, from, map, mergeMap, Observable, switchMap, tap, toArray } from 'rxjs';
import { LessonService } from '../data-access/lesson.service';
import { ExerciseEngineService } from '../utils/exercise-engine.service';
import { Question } from '../frontend-angular-lesson.types';



export type ExerciseConfig = {
  repetition: number,
  incorrectMultiplier: number,
  setIds: number[],
  reverse: boolean
}

export interface ExerciseState {
  questions: Question[],
  questionsLoading: boolean,
  questionsLoaded: boolean,
  config: ExerciseConfig,
  toGuess: number[],
  guessed: number[],
  correctAnswers: number,
  wrongAnswers: number,
  lastAnswerCorrectness: boolean
};

const initialState: ExerciseState = {
  questions: [],
  questionsLoading: false,
  questionsLoaded: false,
  config: {
    repetition: 0,
    incorrectMultiplier: 0,
    setIds: [],
    reverse: false
  },
  toGuess: [],
  guessed: [],
  correctAnswers: 0,
  wrongAnswers: 0,
  lastAnswerCorrectness: false
};

@Injectable()
export class ExerciseStore extends ComponentStore<ExerciseState> {
  constructor(private service: LessonService, private exerciseEnginge: ExerciseEngineService) {
    super(initialState);
  }

  /** Selectors */

  questions$ = this.select( state => state.questions)
  questionsLoading$ = this.select(state => state.questionsLoading)
  questionsLoaded$ = this.select(state => state.questionsLoaded)
  toGuess$ = this.select( state => [...state.toGuess])
  guessed$ = this.select( state => state.guessed)
  toGuessSize$ = this.select(this.toGuess$, (toGuess) => toGuess.length)
  guessedSize$ = this.select(this.guessed$, (guessed) => guessed.length)
  questionsSize$ = this.select(this.questions$, (questions) => questions.length)
  correctAnswers$ = this.select(state => state.correctAnswers)
  wrongAnswers$ = this.select(state => state.wrongAnswers)
  lastAnswerCorrectness$ = this.select(state => state.lastAnswerCorrectness)

  config$ = this.select(state => state.config)
  repetition$ = this.select(this.config$, (config) => config.repetition )
  incorrectMultiplier$ = this.select(this.config$, (config) => config.incorrectMultiplier )

  reverse$ = this.select(this.config$, (config) => config.reverse )


  /** Updaters */

  setConfig = this.updater( (state, config: ExerciseConfig) => {
    return {...state, config: {...config}}
  })

  prepareToGuess = this.updater((state) => {
    const toGuess = this.exerciseEnginge.prepareQuestionsToGuess(state.questions, state.config.repetition);
    return {...state, toGuess}
  })

  correctAnswer = this.updater((state) => {
    if(state.toGuess.length <= 0 ){
      return {...state}
    }

    const {toGuess, guessed} = this.exerciseEnginge.setupCorrectAnswer(state.toGuess, state.guessed)

    return {...state, 
      toGuess,
      guessed,
      correctAnswers: state.correctAnswers + 1,
      lastAnswerCorrectness: true
    }
  })

  incorrectAnswer = this.updater((state) => {
    if(state.toGuess.length <= 0 ){
      return {...state}
    }

    const toGuess = this.exerciseEnginge.setupIncorrectAnswer(state.toGuess, state.config.incorrectMultiplier)

    return {
      ...state, 
      toGuess,
      wrongAnswers: state.wrongAnswers + 1,
      lastAnswerCorrectness: false
    }
  })


  setInitialState = this.updater(() => {
    return initialState
  })

  /** Effects */

  readonly fetchQuestions = this.effect((setIds$: Observable<number[]>) => {
    return setIds$.pipe(
      tap(_ => this.patchState({questionsLoading: true})),
      switchMap((setIds) => from(setIds).pipe(
        mergeMap((setId) => this.service.fetchQuestions(setId).pipe(delay(1000))),
        toArray()
      )),
      map((questions) => {
        return questions.reduce((acc, curr) => [...acc, ...curr], [])
      }),
      tapResponse(
        (questions) => {
          this.patchState({questionsLoading: false, questionsLoaded: true, questions})
        },
        () => {
          this.patchState({questionsLoading: false})
        }
      )
    )
  })

  
}
