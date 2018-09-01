import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from "./components/todos/todos.component";
import { TodoEditComponent} from "./components/todo-edit/todo-edit.component";
import { MyClassDirective } from "./directives/my-class.directive";
import { MyFontStyleDirective } from "./directives/my-font-style.directive";
import { myDatePipe } from "./pipes/myDate.pipe";
import { mySummaPipe } from "./pipes/mySumma.pipe";
import { RouterModule } from "@angular/router";
import { NgStyleDirective } from "./directives/ng-style.directive";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddNewTodoComponent } from "./components/add-new-todo/add-new-todo.component";
import { AboutComponent } from "./components/about/about.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    TodosComponent,
    TodoEditComponent,
    AddNewTodoComponent,
    AboutComponent,
    MyClassDirective,
    NgStyleDirective,
    MyFontStyleDirective,
    myDatePipe,
    mySummaPipe,

  ],
  providers: [],
  exports: [
    TodosComponent,
    TodoEditComponent,
    AddNewTodoComponent
  ]
})
export class TodosModule { }
