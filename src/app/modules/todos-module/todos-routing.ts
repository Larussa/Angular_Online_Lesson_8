import { Routes } from "@angular/router";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoEditComponent } from "./components/todo-edit/todo-edit.component";
import { AddNewTodoComponent } from "./components/add-new-todo/add-new-todo.component";
import { AboutComponent } from "./components/about/about.component";

export const todosRoutes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'todo/:id', component: TodoEditComponent},
  { path: 'addtodo', component: AddNewTodoComponent },
  { path: 'about', component: AboutComponent }
];
