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
import { DonationsModule } from './donations/donations.module';
import { GalleryModule } from './gallery/gallery.module';
import { CarrerModule } from './carrer/carrer.module';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';
import { TestimoniesModule } from './testimonies/testimonies.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users/users.module';
import { StaffModule } from './staff/staff.module';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {depth: 1}
  },
  {
    path: 'about-us',
    component: AboutComponent,
    data: { depth: 1 }
  },
  {
    path: 'contact-us',
    component: ContactComponent,
    data: { depth: 2 }
  },
  { path: '**', component: PageNotFoundComponent, data: { depth: 1 } },
];

@NgModule({
  declarations: [HomePageComponent, PageNotFoundComponent,
     AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    ProfileModule,
    AuthModule,
    DonationsModule,
    GalleryModule,
    CarrerModule,
    ProductsModule,
    ServicesModule,
    TestimoniesModule,
    SharedModule,
    RouterModule.forRoot(routes),
    UsersModule,
    StaffModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
