import { QuestionsEntitiesStore } from './questions-entities.store';
import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { delay, Observable, switchMap, tap } from "rxjs";
import { Question } from "../../features/questions/questions.types";
import { QuestionsService } from "./questions.service";


export interface QuestionCreateState {
    loading: boolean
};

const initialState: QuestionCreateState = {
    loading: false
};

@Injectable()
export class QuestionsCreateStore extends ComponentStore<QuestionCreateState> {
  constructor(private service: QuestionsService, private questionsEntitiesStore: QuestionsEntitiesStore) {
    super(initialState);
  }


  /** Selectors */

  readonly loading$ = this.select(state => state.loading)


  /** Updaters */


  readonly setInitialState = this.updater(() => initialState)

  
  /** Effects */

readonly createQuestion = this.effect((data$: Observable<Question>) => {
    return data$.pipe(
      tap(_ => this.patchState({loading: true})),
      switchMap((data) => this.service.createQuestion(data.setId, data).pipe(
        delay(500),
        tapResponse(
          (response) => {
            this.patchState({loading: false})
            this.questionsEntitiesStore.addEntity(response)
          },
          () => {
            this.patchState({loading: false})
          }
        )
      ))
    )
  })
}

