import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { HeaderComponent } from './header.component';
import { PlugeableModule } from './plugeable/plugeable.module';
import { MServicesModule } from './m-services/m-services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PlugeableModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule,
    MServicesModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule
  ],
  exports: [
    PlugeableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
