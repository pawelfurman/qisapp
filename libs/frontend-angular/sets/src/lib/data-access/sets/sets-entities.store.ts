import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { SetsService } from '../sets.service';
import { Set } from './../../features/sets/sets.types';



export type UpdateableSetData = {
  id?: number,
  name: string
  description: string
}

export interface SetsState {
  entities: Set[],
  loaded: boolean
};

const initialState: SetsState = {
    entities: [],
    loaded: false
};

@Injectable()
export class SetsEntitiesStore extends ComponentStore<SetsState> {
  constructor(private service: SetsService) {
    super(initialState);
  }


  /** Selectors */

  readonly entities$ = this.select(state => state.entities)
  readonly loaded$ = this.select(state => state.loaded)


  /** Updaters */

  readonly addEntities = this.updater((state, entities: Set[]) => {
    return {...state, loaded: true, entities: [...entities] }
  })

  readonly addSet = this.updater((state, entity: Set) => ({
    ...state, 
    entities: [entity, ...state.entities]
  }))

  readonly deleteSet = this.updater( (state, id: number) => ({
    ...state,
    sets: state.entities.filter(s => s.id !== id)
  }))

  readonly updateOne = this.updater((state, data: UpdateableSetData) => {
    return {
      ...state,
      entities: [...state.entities.map((set) => {
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
}
