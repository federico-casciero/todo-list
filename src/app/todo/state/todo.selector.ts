import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.state";

export const TODO_STATE_NAME = 'tasks';

const getToDoState = createFeatureSelector<TodoState>(TODO_STATE_NAME);

export const isEditable = (i:number) => createSelector(getToDoState, (state) => {
  return state.tasks[i]? state.tasks[i].modifing : true
});
