import { AuthState } from "../auth/state/auth.state";
import { TodoState } from "../todo/state/todo.state";
import { ToDo } from "../types/todotype";
import { User } from "../types/userType";

export interface AppState {
    user: AuthState | null,
    toDo: TodoState
}