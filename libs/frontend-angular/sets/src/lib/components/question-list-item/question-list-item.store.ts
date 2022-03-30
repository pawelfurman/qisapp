import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, Observable, switchMap, tap } from 'rxjs';
import { QuestionsService } from '../../data-access/questions.service';
import { QuestionsStore } from '../../store/questions.store';

export type QuestionItemMode = "default" | "update"
export type QuestionItemProcessingTypes = "none" | "update" | "delete"

export interface QuestionListItemState {
  mode: QuestionItemMode,
  processing: QuestionItemProcessingTypes,
  questionId: number
};

const initialState: QuestionListItemState = {
  mode: "default",
  processing: "none",
  questionId: 0
};

@Injectable()
export class QuestionListItemStore extends ComponentStore<QuestionListItemState> {
  constructor(private service: QuestionsService, private questionsStore: QuestionsStore) {
    super(initialState);
  }


  /** Selectors */
  readonly questionId$ = this.select(state => state.questionId)
  readonly mode$ = this.select((state) => state.mode)
  readonly processingDelete$ = this.select((state) => state.processing === "delete")


  readonly vm$ = this.select(
    this.mode$,
    this.processingDelete$,
    (mode, processingDelete) => {
      return {mode, processingDelete}
    }
  )

  /** Updaters */
  readonly setMode = this.updater((state, mode: QuestionItemMode) => {
    return {...state, mode}
  })

  readonly setProcessing = this.updater((state, processing: QuestionItemProcessingTypes) => {
    return {...state, processing}
  })

  readonly setQuestionId = this.updater((state, questionId: number) => {
    return {...state, questionId}
  })




  /** Effects */

  readonly deleteQuestion = this.effect( (questionId$: Observable<number>) =>{
    return questionId$.pipe(
      tap(() => { this.setProcessing("delete") }),
      switchMap((questionId) => {
        return this.service.deleteQuestion(1, questionId).pipe(
          delay(500),
          tapResponse(
            () => {
              this.setProcessing("none")
              this.questionsStore.deleteEntity(questionId)
            },
            () => {

              this.setProcessing("none")
            }

          )
        )
      })
    )
  })
}
