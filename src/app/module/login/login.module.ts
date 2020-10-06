import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { FirstpasswordchangeComponent } from './firstpasswordchange/firstpasswordchange.component';



@NgModule({
  declarations: [LoginComponent, FirstpasswordchangeComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgForm
  ],
  exports: [FormsModule]
})
export class LoginModule { }
