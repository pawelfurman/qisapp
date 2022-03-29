import { FormControlStatus } from "@angular/forms"
import { createFeature, createReducer, on } from "@ngrx/store"
import { HttpRequestStatus } from "../../../app.types"
import * as authActions from "./auth.actions"


export const authKey = 'auth'

export type UserAuth = {
    id: number,
    token: string,
    username: string
}

export type AuthState = UserAuth & {
    loginRequestStatus: HttpRequestStatus
    inputStatus: FormControlStatus
}


const initialState: AuthState = {
    id: 0,
    token: '',
    username: '',
    loginRequestStatus: HttpRequestStatus.IDLE,
    inputStatus: "VALID"
}



export const authFeature = createFeature({
    name: authKey,
    reducer: createReducer(
        initialState,
        on(authActions.login, (state) => {
            return {
                ...state,
                loginRequestStatus: HttpRequestStatus.PROCESSING
            }
        }),
        on(authActions.loginSuccess, (state, {username = '', token, id = 0}) => {
            return {
                ...state,
                loginRequestStatus: HttpRequestStatus.PROCESSED,
                username, token, id
            }
        }),
        on(authActions.loginFailure, (state) => {
            return {
                ...state,
                loginRequestStatus: HttpRequestStatus.ERROR
            }
        }),
        on(authActions.logout, (state) => {
            return initialState
        }),

        on(authActions.loginOnInit, (state, {username, token, id})=>{
            return {
                ...state,
                username, token, id
            }
        })
    )
})


export const {
    selectUsername,
    selectId,
    selectLoginRequestStatus,
    selectToken,
    selectInputStatus
} = authFeature

