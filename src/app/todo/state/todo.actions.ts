import { createAction, props } from "@ngrx/store"
import { ToDo } from "src/app/types/todotype"

export const ADD_TASK =  '[Todo page] add task'
export const REMOVE_TASK =  '[Todo page] remove task'
export const UPDATE_TASK =  '[Todo page] update task'

export const addTask = createAction(
    ADD_TASK,
    props<{cosa: ToDo}>()
)

export const removeTask = createAction(
    REMOVE_TASK,
    props<{task: ToDo}>()
)

export const updateTask = createAction(
    UPDATE_TASK,
    props<{task: ToDo}>()
)