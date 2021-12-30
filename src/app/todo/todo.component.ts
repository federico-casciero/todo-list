import { Component, OnInit } from '@angular/core';
import { ToDo } from '../types/todotype';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  public toDo: ToDo[] = [];
  public toDoApi: ToDo[] = [];
  public image: string="";

  constructor(private _toDoService:TodoService) { }

  ngOnInit(): void {
    this._toDoService.getToDoList().subscribe(data => this.toDoApi=data);
    var keys = Object.keys(localStorage), i = keys.length;
    while ( i-- ) {
      var task: ToDo = JSON.parse(localStorage.getItem(keys[i])+"");
      this.toDo.push(task);
    }
  }

  remove(i:number,task:ToDo){
    localStorage.removeItem(task.id);
    this.toDo.splice(i,1);
  }

  add(task: string, image: string){
    var cosa: ToDo ={
      id: Math.random().toString().substring(2,16),
      task: task,
      image: image,
      modifing: false
    }
    this.toDo.push(cosa);
    localStorage.setItem(cosa.id,JSON.stringify(cosa));
  }

  onClick(task:ToDo){
    task.modifing=!task.modifing;
  }

  change(i: number, task: ToDo){
    task.modifing=!task.modifing;
    this.toDo[i]=task;
    localStorage.setItem(task.id,JSON.stringify(task));
  }

}
