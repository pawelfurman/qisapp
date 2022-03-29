import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { HttpRequestStatus } from "../../../app.types";
import { AuthState } from "./auth.feature";

const selectAuth = createFeatureSelector<AuthState>('auth');

export const isLoginProcessing = createSelector(selectAuth, (authState) => {
    return authState.loginRequestStatus === HttpRequestStatus.PROCESSING
})

export const selectIsLogged = createSelector(selectAuth, (authState) => {
    return !!authState.token.length
})