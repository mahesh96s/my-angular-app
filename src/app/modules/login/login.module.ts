import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password/forget-password.component';
import { LoginService } from '../../core/services/login.service';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    LoginRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
