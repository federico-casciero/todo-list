import { ToDo } from "../types/todotype";
import { User } from "../types/userType";

export interface AppState {
    user: User | null,
    tasks: ToDo[]
}