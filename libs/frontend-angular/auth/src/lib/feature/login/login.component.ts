import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription, tap } from 'rxjs';
import { LoginStore } from '../../store-component/auth.store';

@Component({
  selector: 'fa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginStore]
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('loginInput') loginInput!: ElementRef;

  password: FormControl = new FormControl('', {})
  passwordValueSub!: Subscription;
  isTyping: boolean = false

  constructor(private readonly loginStore: LoginStore) { }

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
