import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { delay, mapTo, Observable, switchMap, tap } from 'rxjs';
import { SetsService } from '../sets.service';
import { SetsEntitiesStore } from './sets-entities.store';


export interface SetsDeleteState {
  loading: boolean
};

const initialState: SetsDeleteState = {
  loading: false,
};

@Injectable()
export class SetsDeleteStore extends ComponentStore<SetsDeleteState> {
  constructor(private service: SetsService, private setsEntitiesStore: SetsEntitiesStore) {
    super(initialState);
  }


  /** Selectors */

  readonly loading$ = this.select(state => state.loading)


  /** Updaters */


  /** Effects */
  
  readonly deleteSet = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      tap(_ => this.patchState({loading: true})),
      switchMap((id) => this.service.deleteSet(id).pipe(delay(500), mapTo(id))),
      tap((id) => {
        this.patchState({loading: true})
        console.log('id', id);
        this.setsEntitiesStore.deleteSet(id)
      })
    )
  })

}
