import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found.component';
import { RoutingModule } from "./routing.module";

// My custom modules

import { TodosModule } from "./modules/todos-module/todos.module";
import { LoginRegNavModule } from "./modules/login-reg-nav/login-reg-nav.module"


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    RoutingModule,
    TodosModule,
    LoginRegNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
