import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { delay, map, Observable, switchMap, tap } from 'rxjs';
import { SetsService } from '../../data-access/sets.service';

type SetsItemLayout = "default" | "update" | "delete" | "delete-check"


export interface SetTableRowState {
  layout: SetsItemLayout,
  checkLoading: boolean
};

const initialState: SetTableRowState = {
  layout: "default",
  checkLoading: false
};

@Injectable()
export class SetListItemStore extends ComponentStore<SetTableRowState> {
  constructor(private setService: SetsService) {
    super(initialState);
  }

  
  /** Selectors */

  readonly layout$ = this.select(state => state.layout)
  readonly checkLoading$ = this.select(state => state.checkLoading)

  readonly vm$ = this.select(
    this.layout$,
    this.checkLoading$,

    (layout, checkLoading) => {
      return {
        checkLoading,
        layout
      }
    })


  /** Updaters */

  readonly setLayout = this.updater((state, layout: SetsItemLayout) => {
    return {...state, layout}
  })

  

  /** Effects */

  readonly checkDelete = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      tap(_ => this.patchState({layout: "default", checkLoading: true})),
      switchMap((id) => this.setService.deleteCheckSet(id).pipe(
        delay(500), 
        map(response => ({response, id}))
      )),
      tap(({response, id}) => {
        this.patchState({layout: response ? 'delete' : 'delete-check', checkLoading: false})
      })
    )
  })
}
