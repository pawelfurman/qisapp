import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { LoginStore } from '../store-component/auth.store';
import { AuthService } from '../auth.service';

@Component({
  selector: 'qis-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginStore]
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('loginInput') loginInput!: ElementRef;

  password: FormControl = new FormControl('', {})
  passwordValueSub!: Subscription;
  isTyping: boolean = false

  constructor(private api: AuthService, private store: Store, private readonly loginStore: LoginStore) { }

  inputStatus$: Observable<string> = this.loginStore.inputStatus$;

  ngOnInit(): void {
    this.passwordValueSub = this.password.valueChanges.pipe(
      tap( (value) => this.loginStore.typePassword(value)
    )).subscribe()
  }

  ngAfterViewInit(): void {
    this.loginInput.nativeElement.focus();
  }

  ngOnDestroy(){
    if(this.passwordValueSub){
      this.passwordValueSub.unsubscribe()
    }
  }

}
