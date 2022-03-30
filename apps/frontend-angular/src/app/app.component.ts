import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsLogged } from '@qisapp/frontend-angular/auth';

@Component({
  selector: 'qis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLogged$: Observable<boolean>  = this.store.select(selectIsLogged)

  constructor(private store: Store){
  }

  

}
