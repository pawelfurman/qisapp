import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { delay, map, Observable, switchMap, tap } from 'rxjs';
import { SetsService } from '../data-access/sets.service';
import { SetTableStore } from './set-table.store';
import { SetsStore } from './sets.store';


type SetsItemLayout = "default" | "update" | "delete" | "delete-check"


export interface SetTableRowState {
  setId: number,
  layout: SetsItemLayout
};

const initialState: SetTableRowState = {
  setId: 0,
  layout: "default"
};

@Injectable()
export class SetTableRowStore extends ComponentStore<SetTableRowState> {
  constructor(private setService: SetsService,  private setTableStore: SetTableStore, private setsStore:SetsStore) {
    super(initialState);
  }

  
  /** Selectors */

  readonly setId$ = this.select(state => state.setId)
  readonly layout$ = this.select(state => state.layout)

  readonly vm$ = this.select(
    this.setId$,
    this.layout$,

    (
      setId,
      layout) => {
      return {
        setId,
        layout
      }
    })


  /** Updaters */

  readonly setSetId = this.updater((state, setId: number) => {
    return {...state, setId}
  })

  readonly setLayout = this.updater((state, layout: SetsItemLayout) => {
    return {...state, layout}
  })

  

  /** Effects */

  readonly checkDelete = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      tap(_ => this.patchState({layout: "default"})),
      switchMap((id) => this.setService.deleteCheckSet(id).pipe(
        delay(500), 
        map(response => ({response, id}))
      )),
      tap(({response, id}) => {
        this.patchState({layout: "default"})
        this.patchState({layout: response ? 'delete' : 'delete-check'})
      })
    )
  })
}
