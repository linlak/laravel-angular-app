import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ProductsComponent]
})
export class ProductsRoutingModule { }
