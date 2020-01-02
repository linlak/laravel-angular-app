import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { AuthServicesModule } from './auth-services/auth-services.module';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ProfileModule,
    AuthServicesModule,
  ],
  exports: [
    AuthServicesModule,
    AuthRoutingModule,
    ProfileModule
  ]
})
export class AuthModule { }
