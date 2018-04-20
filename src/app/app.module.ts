import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';
import { PokedexModule } from './pokedex/pokedex.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    LayoutModule,
    PokedexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
