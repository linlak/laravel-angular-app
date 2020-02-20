import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrerComponent } from './carrer.component';
import { CarrerPageComponent } from './carrer-page/carrer-page.component';


const routes: Routes = [
  {
    path: 'career',
    component: CarrerComponent,
    children: [{
      path: '',
      component: CarrerPageComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [CarrerComponent, CarrerPageComponent]
})
export class CarrerRoutingModule { }
