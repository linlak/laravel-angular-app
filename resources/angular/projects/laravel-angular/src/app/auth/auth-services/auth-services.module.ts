import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { UnAuthGuard } from './un-auth.guard';



@NgModule({
  declarations: [AuthService],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService, AdminGuard, AuthGuard, UnAuthGuard
  ],
})
export class AuthServicesModule {
}
