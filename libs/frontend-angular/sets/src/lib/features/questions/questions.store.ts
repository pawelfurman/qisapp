import { QuestionsService } from './questions.service';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, tap, withLatestFrom } from 'rxjs';
import { Question } from './questions.types';

export interface QuestionsState {
  setId: number,
  entities: Question[],
  loading: boolean,
  loaded: boolean
};

const initialState: QuestionsState = {
  setId: 0,
  entities: [],
  loading: false,
  loaded: false
};

@Injectable()
export class QuestionsStore extends ComponentStore<QuestionsState> {
  constructor(private service: QuestionsService) {
    super(initialState);
  }

  
  /** Selectors */

  readonly setId$ = this.select(state => state.setId)
  readonly entities$ = this.select(state => state.entities)
  readonly loading$ = this.select(state => state.loading)
  readonly loaded$ = this.select(state => state.loaded)


  /** Updaters */

  readonly setSetId = this.updater((state, setId: number) => {
    return {...state, setId}
  })

  readonly setInitialState = this.updater(() => {
    return initialState
  })

  readonly addQuestion = this.updater((state, question: Question) => {
    return {...state, entities: [{...question}, ...state.entities]}
  })

  readonly updateEntity = this.updater((state, question: Question) => {
    return {...state, entities: state.entities.map((q) => {
      if(q.id === question.id){
        return {...q, ...question}
      }
      return q
    })}
  })

  readonly deleteEntity = this.updater((state, questionId: number) => {
    return {...state, entities: state.entities.filter((q) => q.id !== questionId)}
  })


  /** Effects */

  readonly fetchQuestions = this.effect((params$: Observable<{setId: number}>) => {
    return params$.pipe(
      tap(_ => this.patchState({loading: true})),
      withLatestFrom(this.setId$),
      switchMap( ([params, setId]) => this.service.fetchQuestions(params.setId || setId).pipe(
        tapResponse(
          (entities) => {
            this.patchState({loading: false, loaded: true, entities})
          },
          () => {
            this.patchState({loading: false})
          }
        )
      ))
    )
  })
}
