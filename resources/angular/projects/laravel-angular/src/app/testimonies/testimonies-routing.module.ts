import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimoniesComponent } from './testimonies.component';


const routes: Routes = [
  {
    path: 'testimonies',
    component: TestimoniesComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [TestimoniesComponent]
})
export class TestimoniesRoutingModule { }
