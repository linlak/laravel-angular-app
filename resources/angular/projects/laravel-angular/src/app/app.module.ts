import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { HeaderComponent } from './header.component';
import { PlugeableModule } from './plugeable/plugeable.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    PlugeableModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    PlugeableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
