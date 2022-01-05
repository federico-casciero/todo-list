import { Action, createReducer, on } from "@ngrx/store";
import { ToDo } from "src/app/types/todotype";
import { addTask, removeTask, updateTask } from "./todo.actions";
import { todoInitialState, TodoState } from "./todo.state";

const _todoReducer = createReducer(
    todoInitialState,
      on(addTask, (state, action)=>{
          return{...state, tasks: [...state.tasks, action.cosa] }
      }),
      on(removeTask, (state, action)=>{
          return{...state, tasks: [...state.tasks.filter(element=> element.id!==action.task.id)]}
      }),
      on(updateTask, (state, action)=>{
          return{
              ...state,
              tasks: state.tasks.map(element => {
                  if(element.id===action.task.id){
                      element=action.task;
                  }
                  return element;
              })
            }
        })
  )
  
  export function TodoReducer(state: TodoState|undefined, action: Action) {
      return _todoReducer(state, action);
    }