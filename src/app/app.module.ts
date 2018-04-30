import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';
import { PokedexModule } from './pokedex/pokedex.module';
import { BagModule } from './bag/bag.module';
import { PokedexPokemonService } from './pokedex/pokedex-pokemon.service';
import { BagPokemonService } from './bag/bag-pokemon.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    LayoutModule,
    PokedexModule,
    BagModule
  ],
  providers: [PokedexPokemonService, BagPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
