import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const LOGIN_STATE_NAME = 'user';

const getLoginState = createFeatureSelector<AuthState>(LOGIN_STATE_NAME);

export const isAuthenticated = createSelector(getLoginState, (state) => {
  return state.user ? true : false;
});

export const getUsername = createSelector(getLoginState, (state) => {
  return state.user?.username;
});