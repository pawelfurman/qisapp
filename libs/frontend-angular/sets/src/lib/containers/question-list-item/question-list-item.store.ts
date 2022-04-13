import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export type QuestionItemMode = "default" | "update"

export interface QuestionListItemState {
  mode: QuestionItemMode
};

const initialState: QuestionListItemState = {
  mode: "default"
};

@Injectable()
export class QuestionListItemStore extends ComponentStore<QuestionListItemState> {
  constructor() {
    super(initialState);
  }


  /** Selectors */
  readonly mode$ = this.select((state) => state.mode)
  readonly isUpdateMode$ = this.select(this.mode$, (mode) => mode === 'update')
  readonly isDefaultMode$ = this.select(this.mode$, (mode) => mode === 'default')

  readonly vm$ = this.select(
    this.isUpdateMode$,
    this.isDefaultMode$,
    (isUpdateMode, isDefaultMode) => {
      return {
        isUpdateMode,
        isDefaultMode
      }
    }
  )

  /** Updaters */
  readonly setMode = this.updater((state, mode: QuestionItemMode) => {
    return {...state, mode}
  })
}
