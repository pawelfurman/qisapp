import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'qis-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent {

  constructor(private store: Store) { }
}
