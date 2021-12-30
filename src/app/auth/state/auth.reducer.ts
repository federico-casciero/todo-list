import { Action, createReducer, on } from "@ngrx/store";
import { login, logout } from "./auth.actions";
import { AuthState, initialState } from "./auth.state";

const _authReducer = createReducer(
    initialState,
    on(login, (state, action) => {
      return {...state, user: action.user} 
    }),
    on(logout, (state) => {
      return {...state, user: null}
    })
)

export function AuthReducer(state: AuthState|undefined, action: Action) {
    return _authReducer(state, action);
  }