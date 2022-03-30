import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, switchMap, tap, Observable } from 'rxjs';
import { SetsService } from '../data-access/sets.service';
import { Set } from './../features/sets/sets.types'



export type UpdateableSetData = {
  id?: number,
  name: string
  description: string
}

export interface SetsState {
  sets: Set[],
  loading: boolean,
  loaded: boolean
};

const initialState: SetsState = {
  sets: [],
  loading: false,
  loaded: false
};

@Injectable()
export class SetsStore extends ComponentStore<SetsState> {
  constructor(private service: SetsService) {
    super(initialState);
  }


  /** Selectors */

  readonly sets$ = this.select(state => state.sets)
  readonly loading$ = this.select(state => state.loading)
  readonly loaded$ = this.select(state => state.loaded)


  /** Updaters */

  readonly addOneSet = this.updater((state, set: Set) => ({
    ...state, 
    sets: [set, ...state.sets]
  }))

  readonly deleteSet = this.updater( (state, setId: number) => ({
    ...state,
    sets: state.sets.filter(s => s.id !== setId)
  }))

  readonly updateOne = this.updater((state, data: UpdateableSetData) => {
    return {
      ...state,
      sets: [...state.sets.map((set) => {
        if(set.id !== data.id){
          return set
        }
        return {
          ...set,
          ...data
        }
      })]
    }
  })


  /** Effects */

  readonly fetchSets = this.effect((params$: Observable<any>) => params$.pipe(
    switchMap( () => this.service.fetchSets()),
    tap(() => this.patchState({loading: true})),
    delay(300),
    tapResponse(
      (sets) => {
        this.patchState({loading: false, loaded: true, sets: [...sets]})
      },
      () => {
        this.patchState({loading: false})
      }
    )
  )) 
}
