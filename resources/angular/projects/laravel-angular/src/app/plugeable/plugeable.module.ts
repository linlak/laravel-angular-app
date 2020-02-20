import { NgModule, ModuleWithProviders, ModuleWithComponentFactories } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorouselComponent } from './corousel/corousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MServicesModule } from '../m-services/m-services.module';


@NgModule({
  declarations: [
    CorouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MServicesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CorouselComponent,
    MServicesModule
  ]
})
export class PlugeableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlugeableModule,
      providers: []
    };
}
}
