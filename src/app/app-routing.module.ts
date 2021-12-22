import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

const routes: Routes = [
  { path: 'todoList', component: TodoComponent },
  { path: 'typeahead', component: TypeaheadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TodoComponent,
  TypeaheadComponent
]
