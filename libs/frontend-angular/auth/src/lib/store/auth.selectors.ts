import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, HttpRequestStatus } from "./auth.feature";

const selectAuth = createFeatureSelector<AuthState>('auth');

export const isLoginProcessing = createSelector(selectAuth, (authState) => {
    return authState.loginRequestStatus === HttpRequestStatus.PROCESSING
})

export const selectIsLogged = createSelector(selectAuth, (authState) => {
    return !!authState?.token.length
})