import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const USER_STATE_NAME = 'user';

const getUserState = createFeatureSelector<AuthState>(USER_STATE_NAME);

export const isAuthenticated = createSelector(getUserState, (state) => {
  return state.user ? true : false;
});

export const getUsername = createSelector(getUserState, (state) => {
  return state.user?.name;
});