import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { SetsService } from '../../data-access/sets.service';


export type SetsCreateFormLayout = "default" | "create"


export interface SetsState {
  createFormLayout: SetsCreateFormLayout,
  animationEnabling: boolean
};

const initialState: SetsState = {
  createFormLayout: "default",
  animationEnabling: true
};

@Injectable()
export class SetsStore extends ComponentStore<SetsState> {
  constructor(private service: SetsService) {
    super(initialState);
  }


  /** Selectors */

  createFormLayout$ = this.select((state)=>state.createFormLayout)
  animationEnabling$ = this.select((state) => state.animationEnabling)


  /** Updaters */

  setCreateFormLayout = this.updater((state, createFormLayout: SetsCreateFormLayout) => {
    return {...state, createFormLayout}
  })


  setAnimationEnabling = this.updater((state, animationEnabling:boolean) => {
    return {...state, animationEnabling}
  })


  /** Effects */

}
