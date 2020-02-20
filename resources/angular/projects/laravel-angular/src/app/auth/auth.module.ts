import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthServicesModule } from './auth-services/auth-services.module';



@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    AuthServicesModule,
    AuthRoutingModule,
  ],
  exports: [
    // AuthServicesModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
