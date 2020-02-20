import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlugeableModule } from '../plugeable/plugeable.module';
import { DonationsPageComponent } from './donations-page/donations-page.component';
import { MyDonationsPageComponent } from './my-donations-page/my-donations-page.component';
import { Routes, RouterModule } from '@angular/router';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { AuthGuard } from '../auth/auth-services/auth.guard';
import { DonationDetailPageComponent } from './donation-detail-page/donation-detail-page.component';
import { MakeDonationComponent } from './make-donation/make-donation.component';

const donationRoutes: Routes = [
  {
    path: 'donations',
    component: DonatePageComponent,
    children: [
      {
        path: '',
        component: MakeDonationComponent,
      },
      {
        path: 'by-me',
        component: MyDonationsPageComponent,
        canActivateChild: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  declarations: [DonatePageComponent, DonationsPageComponent, MyDonationsPageComponent, DonationDetailPageComponent, MakeDonationComponent],
  imports: [
    CommonModule,
    PlugeableModule,
    RouterModule.forChild(donationRoutes)
  ],
  exports: [
    DonationDetailPageComponent
  ],
  entryComponents: [
    DonationsPageComponent
  ]
})
export class DonationsModule { }
