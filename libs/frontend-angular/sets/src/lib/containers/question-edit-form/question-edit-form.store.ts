import { QuestionUpdate } from '../../features/questions/questions.types';
import { QuestionsService } from '../../data-access/questions.service';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, tap, withLatestFrom, switchMap, delay } from 'rxjs';
import { QuestionListItemStore } from '../question-list-item/question-list-item.store';
import { QuestionsStore } from '../../store/questions.store';

export interface QuestionEditFormState {
  processing: boolean,
};

const initialState: QuestionEditFormState = {
  processing: false
};

@Injectable()
export class QuestionEditFormStore extends ComponentStore<QuestionEditFormState> {
  constructor(private questionsStore: QuestionsStore, private questionItemStore: QuestionListItemStore, private service: QuestionsService) {
    super(initialState);
  }

  
  /** Selectors */

  private readonly processing$ = this.select(state => state.processing)


  readonly vm$ = this.select(
    this.processing$, 
    (processing) => {
      return {
        processing
      }
    }
  )


  /** Updaters */

  setProcessing = this.updater((state, processing: boolean) => {
    return {...state, processing}
  })


  /** Effects */

  readonly updateQuestion = this.effect((data$: Observable<QuestionUpdate> ) => {
    return data$.pipe(
      tap(() => { this.setProcessing(true) }),
      withLatestFrom(
        this.questionsStore.setId$,
        this.questionItemStore.questionId$,
      ),
      switchMap(([data, setId, questionId]) => this.service.updateQuestion(setId, questionId, data).pipe(
        delay(500),
        tapResponse(
          (response) => {
            this.setProcessing(false)
            this.questionItemStore.setMode("default")
            this.questionsStore.updateEntity({...response})
          },
          () => {
            this.setProcessing(false)
          }
        )
      ))
    )
  })


}
