import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, Observable, switchMap, tap } from 'rxjs';
import { SetsService } from '../sets.service';
import { Set } from './../../features/sets/sets.types';
import { SetsEntitiesStore } from './sets-entities.store';


export interface SetsUpdateState {
  loading: boolean
};

const initialState: SetsUpdateState = {
  loading: false,
};

@Injectable()
export class SetsUpdateStore extends ComponentStore<SetsUpdateState> {
  constructor(private service: SetsService, private setsEntitiesStore: SetsEntitiesStore) {
    super(initialState);
  }


  /** Selectors */

  readonly loading$ = this.select(state => state.loading)


  /** Updaters */


  /** Effects */
  
  readonly updateSet = this.effect((data$: Observable<Set>) => {
    return data$.pipe(
      tap(_ => this.patchState({loading: true})),
      switchMap((data) => this.service.updateSet(data.id, data || {}).pipe(
        delay(500),
        tapResponse(
          (_) => {
            this.patchState({loading: false})
            // this.setTableStore.setInitialView()
            this.setsEntitiesStore.updateOne({ ...data, id: setId})
          },
          () => {
            this.patchState({loading: false})
            // this.setTableStore.setInitialView()
          }
        )
      ))
    )
  })


}
