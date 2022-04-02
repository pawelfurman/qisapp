import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SetsEntitiesStore } from '../../data-access/sets/sets-entities.store';
import { Set } from './sets.types';

@Component({
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent {

  sets$: Observable<Set[] | undefined> = this.setsEntitiesStore.entities$;

  constructor(private setsEntitiesStore: SetsEntitiesStore) { }

}
