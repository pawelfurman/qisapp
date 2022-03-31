import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, Observable, switchMap, tap, withLatestFrom } from 'rxjs';
import { QuestionsService } from '../../data-access/questions.service';
import { Question } from '../../features/questions/questions.types';
import { QuestionsStore } from '../../store/questions.store';

export interface QuestionAddFormState {
  processing: boolean
};

const initialState: QuestionAddFormState = {
  processing: false
};

@Injectable()
export class QuestionAddFormStore extends ComponentStore<QuestionAddFormState> {
  constructor(private service: QuestionsService, private questionsStore: QuestionsStore) {
    super(initialState);
  }


  /** Selectors */
  readonly processing$ = this.select(state => state.processing)

  readonly vm$ = this.select(
    this.questionsStore.setId$,
    this.processing$, 
    (setId, processing) => ({
      setId, processing
    }))


  /** Updaters */


  /** Effects */

  readonly createQuestion = this.effect((data$: Observable<Question>) => {
    return data$.pipe(
      tap(_ => this.patchState({processing: true})),
      withLatestFrom(this.questionsStore.setId$),
      switchMap(([data, setId]) => this.service.createQuestion(setId, data).pipe(
        delay(500),
        tapResponse(
          (response) => {
            this.questionsStore.addQuestion(response)
            this.patchState({processing: false})
          },
          () => {
            this.patchState({processing: false})
          }
        )
      ))
    )
  })

}
