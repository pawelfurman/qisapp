import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Question } from "../../features/questions/questions.types";





export interface QuestionEntityState {
    entities: Question[],
    loaded: boolean
};


const initialState: QuestionEntityState = {
  entities: [],
  loaded: false
};

@Injectable()
export class QuestionsEntitiesStore extends ComponentStore<QuestionEntityState> {
  constructor() {
    super(initialState);
  }


  /** Selectors */

  readonly entities$ = this.select(state => state.entities)
  readonly loaded$ = this.select(state => state.loaded)


  /** Updaters */

  readonly addEntities = this.updater((state, entities: Question[]) => {
    return {...state, entities, loaded: true}
  })

  readonly addEntity = this.updater((state, entity: Question) => {
      return {...state, entities: [entity, ...state.entities]}
  })


  readonly updateEntity = this.updater((state, question: Question) => {
    return {...state, entities: state.entities.map((q) => {
      if(q.id === question.id){
        return {...q, ...question}
      }
      return q
    })}
  })

  readonly deleteEntity = this.updater((state, questionId: number) => {
    return {...state, entities: state.entities.filter((q) => q.id !== questionId)}
  })

  readonly setInitialState = this.updater((_) => initialState)

}

