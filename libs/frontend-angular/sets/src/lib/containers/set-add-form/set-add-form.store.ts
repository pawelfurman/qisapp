import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { SetsService } from '../../data-access/sets.service';
import { SetsStore } from '../../store/sets.store';

export type SetsAddFormLayout = "default" | "create"

export type SetAddFormState = {
  layout: SetsAddFormLayout
};

const initialState: SetAddFormState = {
  layout: 'default'
};

@Injectable()
export class SetAddFormStore extends ComponentStore<SetAddFormState> {
  constructor(private service: SetsService, private setsStore: SetsStore) {
    super(initialState);
  }

  /** Selectors */

  readonly layout$ = this.select(state => state.layout)

  readonly vm$ = this.select(this.layout$, (layout ) => ({
    layout
  }))


  /** Updaters */

  readonly setLayout = this.updater((state, layout: SetsAddFormLayout) => ({
    ...state,
    layout
  }))
}
