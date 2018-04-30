import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';
import { PokedexModule } from './pokedex/pokedex.module';
import { BagModule } from './bag/bag.module';
import { PokedexPokemonService } from './pokedex/pokedex-pokemon.service';
import { BagPokemonService } from './bag/bag-pokemon.service';
import { reducers } from './app-reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    MaterialModule,
    LayoutModule,
    PokedexModule,
    BagModule
  ],
  providers: [PokedexPokemonService, BagPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
