import { createAction, props } from "@ngrx/store";
import { UserAuth } from "./auth.feature";

export const login = createAction(
    '[Auth] Login',
    props<{password:string}>()
)

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<UserAuth>()
)

export const loginFailure = createAction(
    '[Auth] Login Failure'
)


export const logout = createAction(
    '[Auth] Logout',
)

export const loginOnInit = createAction(
    '[Auth] Login on init',
    props<UserAuth>()
)