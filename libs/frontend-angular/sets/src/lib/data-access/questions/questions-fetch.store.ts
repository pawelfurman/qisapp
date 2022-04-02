import { QuestionsEntitiesStore } from './questions-entities.store';
import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Observable, switchMap, tap } from "rxjs";
import { QuestionsService } from "./questions.service";




export interface QuestionFetchState {
    loading: boolean
};

const initialState: QuestionFetchState = {
    loading: false
};

@Injectable()
export class QuestionsFetchStore extends ComponentStore<QuestionFetchState> {
  constructor(private service: QuestionsService, private questionsEntitiesStore: QuestionsEntitiesStore) {
    super(initialState);
  }


  /** Selectors */

  readonly loading$ = this.select(state => state.loading)


  /** Updaters */

  readonly setInitialState = this.updater(() => initialState)

  
  /** Effects */

  readonly fetchQuestions = this.effect((params$: Observable<{setId: number}>) => {
    return params$.pipe(
      tap(_ => this.patchState({loading: true})),
      switchMap( (params) => this.service.fetchQuestions(params.setId).pipe(
        tapResponse(
          (entities) => {
            this.questionsEntitiesStore.addEntities(entities);
            this.patchState({loading: false})
          },
          () => {
            this.patchState({loading: false})
          }
        )
      ))
    )
  })



}

