import { SetsEntitiesStore } from './sets-entities.store';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, tap, delay, switchMap } from 'rxjs';
import { SetsService } from '../sets.service';
import { Set } from './../../features/sets/sets.types';


export interface SetsCreateState {
  loading: boolean
};

const initialState: SetsCreateState = {
  loading: false,
};

@Injectable()
export class SetsCreateStore extends ComponentStore<SetsCreateState> {
  constructor(private service: SetsService, private setsEntitiesStore: SetsEntitiesStore) {
    super(initialState);
  }


  /** Selectors */

  readonly loading$ = this.select(state => state.loading)


  /** Updaters */


  /** Effects */
  
  readonly createSet = this.effect((data$: Observable<Partial<Set>>) => {
    return data$.pipe(
      tap(_ => this.patchState({loading: true})),
      delay(500),
      switchMap((data) => this.service.createSet(data).pipe(
        tapResponse(
          (data: Set) => {
            this.patchState({loading: false})
            this.setsEntitiesStore.addSet(data)
          },
          () => {
            this.patchState({loading: false})
          }
        )
      ))
    )
  })

}
