import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { delay, Observable, switchMap, tap } from "rxjs";
import { QuestionsService } from "./questions.service";
import { QuestionsEntitiesStore } from './questions-entities.store';


export interface QuestionDeleteState {
    loading: boolean
};

const initialState: QuestionDeleteState = {
    loading: false
};

@Injectable()
export class QuestionsDeleteStore extends ComponentStore<QuestionDeleteState> {
  constructor(private service: QuestionsService, private questionsEntitiesStore: QuestionsEntitiesStore) {
    super(initialState);
  }


  /** Selectors */

  readonly loading$ = this.select(state => state.loading)



  /** Updaters */

  readonly setLoading = this.updater((state, loading: boolean) => {
      return {...state, loading}
  })

  readonly setInitialState = this.updater(() => initialState)

  
  /** Effects */

readonly deleteQuestion = this.effect( (data$: Observable<{questionId: number, setId: number}>) =>{
    return data$.pipe(
      tap(() => {
        this.patchState({loading: true}) 
      }),
      switchMap((data) => {
        return this.service.deleteQuestion(data.setId, data.questionId).pipe(
          delay(500),
          tapResponse(
            () => {
                this.questionsEntitiesStore.deleteEntity(data.questionId)
                this.patchState({loading: false})
            },
            () => {
              this.patchState({loading: false})
            }

          )
        )
      })
    )
  })

}

