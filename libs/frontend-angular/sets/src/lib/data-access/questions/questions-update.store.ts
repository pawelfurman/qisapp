import { QuestionsEntitiesStore } from './questions-entities.store';
import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { delay, Observable, switchMap, tap } from "rxjs";
import { Question } from "../../features/questions/questions.types";
import { QuestionsService } from "./questions.service";
import { ApiQuestion } from '@qisapp/api-contract';





export interface QuestionState {
    loading: boolean
};

const initialState: QuestionState = {
    loading: false
};

@Injectable()
export class QuestionsUpdateStore extends ComponentStore<QuestionState> {
  constructor(private service: QuestionsService, private questionsEntitiesStore: QuestionsEntitiesStore) {
    super(initialState); 
  }


  /** Selectors */

  readonly loading$ = this.select(state => state.loading)


  /** Updaters */

  readonly setInitialState = this.updater((_) => initialState)

  
  /** Effects */

readonly updateQuestion = this.effect((data$: Observable<Question> ) => {
    return data$.pipe(
      tap(() => { this.patchState({loading: true}) }),

      switchMap((data) => this.service.updateQuestion(data.setId,  data.id, data).pipe(
        delay(500),
        tapResponse(
          (response: ApiQuestion) => {
            this.patchState({loading: false})
            this.questionsEntitiesStore.updateEntity(response)
          },
          () => {
            this.patchState({loading: false})
          }
        )
      ))
    )
  })

}

