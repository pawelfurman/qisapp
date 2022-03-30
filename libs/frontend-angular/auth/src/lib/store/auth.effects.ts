import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { AuthService } from "../data-access/auth.service";
import { LocalStorageService } from "../utils/local-storage.service";
import * as authActions from './auth.actions';


@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private api: AuthService, private router: Router, private ls: LocalStorageService){}

    login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.login),
        switchMap(
            ({password}) => this.api.login({password}).pipe(
                map((response) => authActions.loginSuccess({...response})),
                catchError(({error}) => of(authActions.loginFailure()))
            )
        )
    ))

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.loginSuccess),
        map(({token, username, id}) => {
            this.ls.setItem('user', {token, username, id})
            this.router.navigate(['/', 'dashboard'])
        }) 
    ), {dispatch: false})

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.logout),
        map( () => {
            this.ls.removeItem('user')
            this.router.navigate(['/', 'login'])
        }) 
    ), {dispatch: false})
}