import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { delay, Observable, switchMap, tap } from "rxjs";
import { Question } from "../features/questions/questions.types";
import { QuestionsService } from "./questions.service";





export interface QuestionState {
    entities: Question[],
    isCreateLoading: boolean,
    isDeleteLoading: boolean,
    isUpdateLoading: boolean,
    isFetchLoading: boolean,
    isLoading: boolean,
    loaded: boolean
};

const initialState: QuestionState = {
  entities: [],
  isCreateLoading: false,
  isDeleteLoading: false,
  isUpdateLoading: false,
  isFetchLoading: false,
  isLoading: false,
  loaded: false
};

@Injectable()
export class QuestionsDataStore extends ComponentStore<QuestionState> {
  constructor(private service: QuestionsService) {
    super(initialState);
  }


  /** Selectors */

  readonly entities$ = this.select(state => state.entities)
  readonly isLoading$ = this.select(state => state.isLoading)
  readonly isCreateLoading$ = this.select(state => state.isCreateLoading)
  readonly isDeleteLoading$ = this.select(state => state.isDeleteLoading)
  readonly isUpdateLoading$ = this.select(state => state.isUpdateLoading)
  readonly loaded$ = this.select(state => state.loaded)


  /** Updaters */


  readonly addEntity = this.updater((state, entity: Question) => {
      return {...state, entities: [entity, ...state.entities]}
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

  readonly setInitialState = this.updater((_) => initialState)

  /** Effects */

  readonly fetchQuestions = this.effect((params$: Observable<{setId: number}>) => {
    return params$.pipe(
      tap(_ => this.patchState({isLoading: true, isFetchLoading: true})),
      switchMap( (params) => this.service.fetchQuestions(params.setId).pipe(
        tapResponse(
          (entities) => {
            this.patchState({isLoading: false, isFetchLoading: false, loaded: true, entities})
          },
          () => {
            this.patchState({isLoading: false, isFetchLoading: false})
          }
        )
      ))
    )
  })

readonly createQuestion = this.effect((data$: Observable<Question>) => {
    return data$.pipe(
      tap(_ => this.patchState({isLoading: true, isCreateLoading: true})),
      switchMap((data) => this.service.createQuestion(data.setId, data).pipe(
        delay(500),
        tapResponse(
          (response) => {
            this.addEntity(response)
            this.patchState({isLoading: false, isCreateLoading: false})
          },
          () => {
            this.patchState({isLoading: false, isCreateLoading: false})
          }
        )
      ))
    )
  })


readonly updateQuestion = this.effect((data$: Observable<Question> ) => {
    return data$.pipe(
      tap(() => { this.patchState({isLoading: true, isUpdateLoading: true}) }),

      switchMap((data) => this.service.updateQuestion(data.setId,  data.id, data).pipe(
        delay(500),
        tapResponse(
          (response) => {
            this.patchState({isLoading: false, isUpdateLoading: false})
            // this.questionItemStore.setMode("default")
            this.updateEntity({...response})
          },
          () => {
            this.patchState({isLoading: false, isUpdateLoading: false})
          }
        )
      ))
    )
  })


readonly deleteQuestion = this.effect( (data$: Observable<{questionId: number, setId: number}>) =>{
    return data$.pipe(
      tap(() => { this.patchState({isLoading: true, isDeleteLoading: true}) }),
      switchMap((data) => {
        return this.service.deleteQuestion(data.setId, data.questionId).pipe(
          delay(500),
          tapResponse(
            () => {
              this.patchState({isLoading: false, isDeleteLoading: false})
              this.deleteEntity(data.questionId)
            },
            () => {
              this.patchState({isLoading: false, isDeleteLoading: false})
            }

          )
        )
      })
    )
  })

}

