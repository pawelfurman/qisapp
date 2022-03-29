import { Injectable } from "@angular/core";
import { ComponentStore, tapResponse } from "@ngrx/component-store";
import { Store } from '@ngrx/store';
import { bufferCount, EMPTY, filter, map, Observable, startWith, switchMap, tap, timer } from "rxjs";
import { loginSuccess } from '../store/auth.actions';
import { AuthService } from '../auth.service';

type InputStatus = "EMPTY" | "PENDING" | "INVALID" | "VALID"

export interface LoginState {
    inputStatus: InputStatus
}

@Injectable()
export class LoginStore extends ComponentStore<LoginState>{

    constructor(private store: Store, private api: AuthService) {
        super({
            inputStatus: "EMPTY"
        })
    }

    readonly inputStatus$: Observable<string> = this.select(state => state.inputStatus)

    readonly changeStatus = this.updater((state, inputStatus: InputStatus) => {
        return { ...state, inputStatus }
    })


    readonly typePassword = this.effect((event$: Observable<any>) => {
        return event$.pipe(
            tap((_) => { this.changeStatus("PENDING") }),
            
            switchMap(password => {
                if (password.replaceAll(' ', '').length === 0) {
                    this.changeStatus("EMPTY")
                    return EMPTY
                }
                return timer(250).pipe(map(() => password))
            }),
            startWith(''),
            bufferCount(2,1), // or pairwise() ?
            filter(([prevPassword, currentPassword]) => {
                if(prevPassword === currentPassword){
                    this.changeStatus("INVALID")
                    return false;
                }
                return true;
            }),
            map(([_, password]) => password),
            switchMap((password) => this.api.login({ password }).pipe(
                tapResponse(
                    ({ token, username, id }) => {
                        this.changeStatus("VALID")
                        this.store.dispatch(loginSuccess({ token, username, id }))
                    },
                    () => {
                        this.changeStatus("INVALID")
                    }
                )
            ))
        );
    })
}