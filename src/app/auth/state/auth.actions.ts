import { createAction, props } from "@ngrx/store"
import { User } from "src/app/types/userType"

export const LOGIN = '[auth page] login'
export const LOGOUT = '[auth page] logout'

export const login = createAction(
    LOGIN,
    props<{user: User | null}>()
)

export const logout = createAction(
    LOGOUT
)