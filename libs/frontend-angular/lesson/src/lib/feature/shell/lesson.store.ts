import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, from, map, mergeMap, Observable, switchMap, tap, toArray } from 'rxjs';
import { LessonService } from '../../data-access/lesson.service';
import { Question, Set } from '../../frontend-angular-lesson.types';

export interface LessonState {
  sets: Set[]
  questions: Question[]
  setsLoading: boolean
  setsLoaded: boolean
  questionsLoading: boolean
  questionsLoaded: boolean
};

const initialState: LessonState = {
  sets: [],
  questions: [],
  setsLoading: false,
  setsLoaded: false,
  questionsLoading: false,
  questionsLoaded: false
};

@Injectable()
export class LessonStore extends ComponentStore<LessonState> {
  constructor(private service: LessonService) {
    super(initialState);
  }

  /** Selectors */
  sets$ = this.select( state => state.sets)
  questions$ = this.select( state => state.questions)


  /** Effects */

  readonly fetchSets = this.effect((params$: Observable<unknown>) => params$.pipe(
    switchMap( () => this.service.fetchSets()),
    tap(() => this.patchState({setsLoading: true})),
    delay(300),
    tapResponse(
      (sets) => {
        this.patchState({setsLoading: false, setsLoaded: true, sets: [...sets]})
      },
      () => {
        this.patchState({setsLoading: false})
      }
    )
  )) 

  readonly fetchQuestions = this.effect((setIds$: Observable<number[]>) => {
    return setIds$.pipe(
      tap(_ => this.patchState({questionsLoading: true})),
      switchMap((setIds) => from(setIds).pipe(
        mergeMap((setId) => this.service.fetchQuestions(setId).pipe(delay(300))),
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
