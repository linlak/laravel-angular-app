import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';


const routes: Routes = [{
  path: 'services',
  component: ServicesComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ServicesComponent]
})
export class ServicesRoutingModule { }
