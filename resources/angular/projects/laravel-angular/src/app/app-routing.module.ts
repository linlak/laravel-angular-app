import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { SharedModule } from './shared.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth/auth-services/auth.guard';
import { AdminGuard } from './auth/auth-services/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'about-us',
    component: AboutComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [HomePageComponent, PageNotFoundComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
