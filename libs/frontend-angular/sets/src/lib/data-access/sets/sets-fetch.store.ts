import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, Observable, switchMap, tap } from 'rxjs';
import { SetsService } from '../sets.service';
import { SetsEntitiesStore } from './sets-entities.store';


export interface SetsFetchState {
  loading: boolean
};

const initialState: SetsFetchState = {
  loading: false,
};

@Injectable()
export class SetsFetchStore extends ComponentStore<SetsFetchState> {
  constructor(private service: SetsService, private setsEntitiesStore: SetsEntitiesStore) {
    super(initialState);
  }


  /** Selectors */

  readonly loading$ = this.select(state => state.loading)


  /** Updaters */


  /** Effects */

  readonly fetchSets = this.effect((params$: Observable<any>) => params$.pipe(
    switchMap( () => this.service.fetchSets()),
    tap(() => this.patchState({loading: true})),
    delay(300),
    tapResponse(
      (sets) => {
        this.patchState({loading: false}),
        this.setsEntitiesStore.addEntities(sets)
      },
      () => {
        this.patchState({loading: false})
      }
    )
  )) 

}
