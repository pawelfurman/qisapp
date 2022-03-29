import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../../auth/store/auth.actions';

@Component({
  selector: 'qis-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  logout(){
    this.store.dispatch(logout())
  }

}
