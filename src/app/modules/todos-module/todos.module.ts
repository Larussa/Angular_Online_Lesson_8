import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from "./components/todos/todos.component";
import { MyClassDirective } from "./directives/my-class.directive";
import { MyFontStyleDirective } from "./directives/my-font-style.directive";
import { myDatePipe } from "./pipes/myDate.pipe";
import { mySummaPipe } from "./pipes/mySumma.pipe";
import { RouterModule } from "@angular/router";
import { NgStyleDirective } from "./directives/ng-style.directive";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()

  ],
  declarations: [
    TodosComponent,
    MyClassDirective,
    NgStyleDirective,
    MyFontStyleDirective,
    myDatePipe,
    mySummaPipe
  ],
  providers: [],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
