import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { SetsService } from '../../data-access/sets.service';


export type SetsCreateFormLayout = "default" | "create"


export interface SetsState {
  createFormLayout: SetsCreateFormLayout
};

const initialState: SetsState = {
  createFormLayout: "default"
};

@Injectable()
export class SetsStore extends ComponentStore<SetsState> {
  constructor(private service: SetsService) {
    super(initialState);
  }


  /** Selectors */

  createFormLayout$ = this.select((state)=>state.createFormLayout)


  /** Updaters */

  setCreateFormLayout = this.updater((state, createFormLayout: SetsCreateFormLayout) => {
    return {...state, createFormLayout}
  })


  /** Effects */

}
