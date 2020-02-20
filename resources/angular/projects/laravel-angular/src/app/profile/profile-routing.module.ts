import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePageComponent,
    children: [
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'edit',
        component: EditProfileComponent
      },
      // {
      //   path: 'add-phone',
      //   component: AddPhoneComponent
      // }
    ]
  }
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    ProfileComponent,
    AddPhoneComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }
