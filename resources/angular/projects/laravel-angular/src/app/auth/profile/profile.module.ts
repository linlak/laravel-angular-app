import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';



@NgModule({
  declarations: [ProfileComponent, EditProfileComponent, AddPhoneComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
