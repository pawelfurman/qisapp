import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SetsStore } from '../sets.store';
import { Set } from '../sets.types';

@Component({
  templateUrl: './page-sets.component.html',
  styleUrls: ['./page-sets.component.scss']
})
export class PageSetsComponent {

  sets$: Observable<Set[] | undefined> = this.setsStore.sets$;
  setsLoading$: Observable<boolean> = this.setsStore.loading$;

  constructor(private setsStore: SetsStore) { }

}
