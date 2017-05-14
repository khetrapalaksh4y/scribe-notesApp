import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingModule
  ],
  declarations: [LoginComponent, SignUpComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule { }
