import { Component, OnInit } from '@angular/core';
import { ToDo } from '../types/todotype';
import { TodoService } from '../services/todo.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/state';
import { getUsername } from '../auth/state/auth.selector';
import { addTask, removeTask, updateTask } from './state/todo.actions';
import { isEditable } from './state/todo.selector';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public toDo: ToDo[] = [];
  public toDoApi: ToDo[] = [];
  public image: string="";
  public taskName: string="";
  public taskImage: string="";

  constructor(private _toDoService:TodoService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this._toDoService.getToDoList().subscribe(data => this.toDoApi=data);
    let keys = Object.keys(localStorage), i = keys.length;
    while ( i-- ) {
      let cosa: ToDo = JSON.parse(localStorage.getItem(keys[i])+"");
      this.toDo.push(cosa);
      this.store.select("toDo");
      this.store.dispatch(addTask({cosa}))
    }
  }

  remove(i:number,task:ToDo){
    localStorage.removeItem(task.id);
    this.toDo.splice(i,1);
    this.store.select("toDo");
    this.store.dispatch(removeTask({task}));
  }

  add(task: string, image: string){
    const cosa: ToDo ={
      id: Math.random().toString().substring(2, 16),
      task: task,
      image: image,
      user: undefined,
      modifing: false
    }
    this.store.select(getUsername).subscribe(name=> cosa.user=name);
    this.toDo.push(cosa);
    localStorage.setItem(cosa.id,JSON.stringify(cosa));
    this.store.select("toDo");
    this.store.dispatch(addTask({cosa}))
  }

  onClick(taskx: ToDo, i: number){
    const task: ToDo = {
      id: taskx.id,
      task: taskx.task,
      image: taskx.image,
      user: taskx.user,
      modifing: !this.isEditable(i)
    }
    this.store.select("toDo")
    this.store.dispatch(updateTask({task}));
  }

  isEditable(i:number){
    let x: boolean = false;
    this.store.select(isEditable(i)).subscribe(value=> x=value);
    return x;
  }

  change(i: number, taskx: ToDo){
    const task: ToDo = {
      id: taskx.id,
      task: this.taskName,
      image: this.taskImage,
      user: taskx.user,
      modifing: false
    }
    this.toDo[i]=task;
    localStorage.setItem(task.id,JSON.stringify(task));
    this.store.select("toDo");
    this.store.dispatch(updateTask({task}));
  }

}
