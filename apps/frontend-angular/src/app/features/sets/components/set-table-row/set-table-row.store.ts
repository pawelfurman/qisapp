import { SetsStore } from '../../features/sets/sets.store';
import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { delay, map, mapTo, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { SetTableStore } from '../set-table/set-table.store';
import { SetsService } from '../../features/sets/sets.service';

type UpdateData = {
  name: string,
  description: string
}

export type HttpProcessingMode = "none" | "update" | "delete" | "delete-check"


export interface SetTableRowState {
  setId: number,
  processingUpdate: boolean,
  processingDelete: boolean,
  processingDeleteCheck: boolean
  processing: HttpProcessingMode
};

const initialState: SetTableRowState = {
  setId: 0,
  processingUpdate: false,
  processingDelete: false,
  processingDeleteCheck: false,
  processing: "none"
};

@Injectable()
export class SetTableRowStore extends ComponentStore<SetTableRowState> {
  constructor(private setService: SetsService,  private setTableStore: SetTableStore, private setsStore:SetsStore) {
    super(initialState);
  }

  
  /** Selectors */

  readonly setId$ = this.select(state => state.setId)
  readonly processing$ = this.select(state => state.processing)
  readonly processingUpdate$ = this.select(this.processing$, (processing) => processing === "update")
  readonly processingDelete$ = this.select(this.processing$, (processing) => processing === "delete")
  readonly processingDeleteCheck$ = this.select(this.processing$, (processing) => processing === "delete-check")

  readonly template$ = this.select(
    this.setTableStore.selectedSetId$,
    this.setTableStore.selectedSetMode$,
    this.setId$,
    (selectedId, mode, setId) => {
      return selectedId === setId ? mode : 'default'
    })

  readonly vm$ = this.select(
    this.setId$,
    this.template$,
    (setId, template) => {
      return {
        setId,
        template
      }
    })


  /** Updaters */

  readonly setSetId = this.updater((state, setId: number) => {
    return {...state, setId}
  })

  

  /** Effects */

  readonly updateSet = this.effect((data$: Observable<UpdateData>) => {
    return data$.pipe(
      tap(_ => this.patchState({processing: "update"})),
      withLatestFrom(this.setId$),
      switchMap(([data, setId]) => this.setService.updateSet(setId, data || {}).pipe(
        delay(500),
        tapResponse(
          (_) => {
            this.setTableStore.setInitialView()
            this.setsStore.updateOne({id: setId, ...data})
          },
          () => {
            this.setTableStore.setInitialView()
          }
        )
      ))
    )
  })

  readonly enterToDeleteView = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      tap(_ => this.patchState({processing: "delete-check"})),
      switchMap((id) => this.setService.deleteCheckSet(id).pipe(
        delay(500), 
        map(response => ({response, id}))
      )),
      tap(({response, id}) => {
        this.patchState({processing: "none"})
        this.setTableStore.setSetView([id, response ? "deletion" : "deletion-inability"])
      })
    )
  })

  readonly deleteSet = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      tap(_ => this.patchState({processing: "delete"})),
      switchMap((id) => this.setService.deleteSet(id).pipe(delay(500), mapTo(id))),
      tap((id) => {
        this.patchState({processing: "none"})
        this.setsStore.deleteSet(id)
        this.setTableStore.setInitialView()
      })
    )
  })

  
}
