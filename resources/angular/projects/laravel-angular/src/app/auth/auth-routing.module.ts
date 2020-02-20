import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-services/auth.guard';
import { UnAuthGuard } from './auth-services/un-auth.guard';
import { PlugeableModule } from '../plugeable/plugeable.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordConfirmComponent } from './reset-password-confirm/reset-password-confirm.component';
import { ActivationCodeComponent } from './activation-code/activation-code.component';

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnAuthGuard]
  },
   {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UnAuthGuard]
  },
   {
    path: 'forgort-password',
    component: RecoverPasswordComponent,
    canActivate: [UnAuthGuard]
  },
   {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
     ResetPasswordComponent,
      ResetPasswordConfirmComponent,
       ActivationCodeComponent
      ],
  imports: [
    CommonModule,
    PlugeableModule,
    RouterModule.forRoot(authRoutes)
  ],
  exports: [
    CommonModule
  ]
})
export class AuthRoutingModule { }
