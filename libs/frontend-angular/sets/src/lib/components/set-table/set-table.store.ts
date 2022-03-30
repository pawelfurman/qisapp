import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { SetsService } from '../../features/sets/sets.service';
import { SetsStore } from '../../features/sets/sets.store';

export type SetMode = "default" | "edition" | "deletion" | "deletion-inability"

type SetData = {
  name: string,
  description: string
}

export interface SetTableState {
  selectedSetId: number,
  selectedSetMode: SetMode
};

const initialState: SetTableState = {
  selectedSetId: 0,
  selectedSetMode: 'default',
};

@Injectable()
export class SetTableStore extends ComponentStore<SetTableState> {
  constructor(private service:SetsService, private setStore: SetsStore) {
    super(initialState);
  }

  readonly selectedSetId$ = this.select((state) => state.selectedSetId)
  readonly selectedSetMode$ = this.select((state) => state.selectedSetMode)

  
  readonly setId = this.updater((state, selectedSetId: number) => {
    return {...state, selectedSetId}
  })

  readonly setStatus = this.updater((state, status: SetMode) => {
    return {...state, status}
  })

  readonly setSetView = this.updater((state, [selectedSetId, selectedSetMode]: [number, SetMode]) => {
    return {
      ...state,
      selectedSetId,
      selectedSetMode
    }    
  })

  readonly setInitialView = this.updater((state) => {
    return {
      ...initialState
    }
  })



  
}
