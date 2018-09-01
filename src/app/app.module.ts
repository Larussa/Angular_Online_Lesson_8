import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { RoutingModule } from "./routing.module";

// My custom modules

import { TodosModule } from "./modules/todos-module/todos.module"
import { LoginRegNavModule } from "./modules/login-reg-nav/login-reg-nav.module"



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],

  imports: [
    RoutingModule,
    TodosModule,
    LoginRegNavModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
