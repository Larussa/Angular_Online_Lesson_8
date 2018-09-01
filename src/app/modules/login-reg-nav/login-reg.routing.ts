import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";

export const loginRegRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];
