import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, tap, delay, switchMap } from 'rxjs';
import { SetsService } from '../../data-access/sets.service';
import {Set} from '../../features/sets/sets.types' 
import { SetsStore } from '../../store/sets.store';

export type ComponentMode = "default" | "create"

export type SetAddFormState = {
  mode: ComponentMode
  processingCreate: boolean
};

const initialState: SetAddFormState = {
  mode: 'default',
  processingCreate: false
};

@Injectable()
export class SetAddFormStore extends ComponentStore<SetAddFormState> {
  constructor(private service: SetsService, private setsStore: SetsStore) {
    super(initialState);
  }

  /** Selectors */

  readonly mode$ = this.select(state => state.mode)
  readonly processingCreate$ = this.select(state => state.processingCreate)

  readonly vm$ = this.select(this.mode$, this.processingCreate$, (mode, processingCreate ) => ({
    mode,
    processingCreate
  }))


  /** Updaters */

  readonly setMode = this.updater((state, mode: ComponentMode) => ({
    ...state,
    mode
  }))


  /** Effects */

  readonly createSet = this.effect((data$: Observable<Partial<Set>>) => {
    return data$.pipe(
      tap(_ => this.patchState({processingCreate: true})),
      delay(500),
      switchMap((data) => this.service.createSet(data).pipe(
        tapResponse(
          (data: Set) => {
            this.patchState({processingCreate: false, mode: "default"})
            this.setsStore.addOneSet(data)
          },
          () => {
            this.patchState({processingCreate: false, mode: "default"})
          }
        )
      ))
    )
  })
}
