import { User } from "src/app/types/userType";

export interface AuthState{
    user: User | null;
}

export const initialState: AuthState = {
    user: null
}