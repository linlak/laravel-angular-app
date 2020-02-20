import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffAddComponent } from './staff-add/staff-add.component';


const routes: Routes = [
  {
    path: 'staff',
    component: StaffComponent,
    children: [
      {
        path: '',
        component: StaffListComponent
      },
      {
        path: 'details/:stafflink',
        component: StaffDetailsComponent
      },
      {
        path: 'edit/:id',
        component: StaffEditComponent
      },
      {
        path: 'new',
        component: StaffAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [StaffComponent, StaffListComponent, StaffDetailsComponent, StaffEditComponent, StaffAddComponent]
})
export class StaffRoutingModule { }
