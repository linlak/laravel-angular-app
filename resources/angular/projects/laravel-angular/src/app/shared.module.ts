import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// bootstrap
import { PlugeableModule } from './plugeable/plugeable.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlugeableModule.forRoot()
  ],
  exports: [
    CommonModule,
    PlugeableModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ],
    };
  }
 }
