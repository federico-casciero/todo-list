import { ToDo } from "src/app/types/todotype";

export interface TodoState{
    tasks: ToDo[]
}

export const todoInitialState: TodoState = {
    tasks: []
}