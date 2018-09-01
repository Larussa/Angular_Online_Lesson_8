import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule} from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { LoginComponent } from "./components/login/login.component";


@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent,
    NavbarComponent
  ],
  exports: [
    RegistrationComponent,
    LoginComponent,
    NavbarComponent
  ]
})
export class LoginRegNavModule { }
