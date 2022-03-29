
import { Directive, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Store } from '@ngrx/store';



@Directive({
  selector: '[qisLogable]'
})
export class LogableDirective implements OnInit {


  constructor(
    private store: Store,
    private control: NgControl) { }

  ngOnInit(){

    // this.control.control?.valueChanges.pipe(
    //   debounceTime(1000),
    //   distinctUntilChanged()
    // ).subscribe(
    //   (password) => {
    //     this.store.dispatch(authActions.login({password}))
    //   }
    // )
  }

  

}
