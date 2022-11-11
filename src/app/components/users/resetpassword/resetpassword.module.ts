import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ResetpasswordRoutingModule } from './resetpassword-routing.module';
import { ResetpasswordComponent } from './resetpassword.component';
@NgModule({
  imports: [
    CommonModule,
    ResetpasswordRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ResetpasswordComponent]
})
export class ResetpasswordModule { }
