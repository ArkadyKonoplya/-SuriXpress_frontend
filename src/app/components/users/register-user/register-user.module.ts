import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterUserRoutingModule } from './register-user-routing.module';
import { RegisterUserComponent } from './register-user.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterUserComponent]
})
export class RegisterUserModule { }
