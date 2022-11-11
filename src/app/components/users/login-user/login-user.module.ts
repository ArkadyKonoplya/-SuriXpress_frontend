import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginUserRoutingModule } from './login-user-routing.module';
import { LoginUserComponent } from './login-user.component';

@NgModule({
  imports: [
    CommonModule,
    LoginUserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginUserComponent]
})
export class LoginUserModule { }
