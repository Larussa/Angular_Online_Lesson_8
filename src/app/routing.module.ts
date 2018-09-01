import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { NotFoundComponent } from "./components/not-found.component";
import { todosRoutes } from "./modules/todos-module/todos-routing";
import {loginRegRoutes} from "./modules/login-reg-nav/login-reg.routing";



const routes: Routes = [
  { path: 'login', children: [...loginRegRoutes] },
  { path: '', children: [...todosRoutes], canActivate: [AuthGuard] },
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoutingModule { }
