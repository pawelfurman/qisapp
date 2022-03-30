import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '@qisapp/frontend-angular/auth';

@Component({
  selector: 'qis-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(private store: Store) { }


  logout(){
    this.store.dispatch(logout())
  }

}
