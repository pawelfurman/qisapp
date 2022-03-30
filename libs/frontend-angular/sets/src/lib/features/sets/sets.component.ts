import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SetsStore } from '../../store/sets.store';
import { Set } from './sets.types';

@Component({
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent {

  sets$: Observable<Set[] | undefined> = this.setsStore.sets$;
  setsLoading$: Observable<boolean> = this.setsStore.loading$;

  constructor(private setsStore: SetsStore) { }

}
