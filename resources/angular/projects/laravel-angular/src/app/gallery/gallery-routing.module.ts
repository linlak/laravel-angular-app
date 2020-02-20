import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';
import { GalleriesComponent } from './galleries/galleries.component';


const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,
    children: [
      {path: '',
    component: GalleriesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [GalleryComponent, GalleriesComponent]
})
export class GalleryRoutingModule { }
