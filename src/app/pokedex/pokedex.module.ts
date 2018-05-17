import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PokedexPokemonListComponent } from './pokedex-pokemon-list/pokedex-pokemon-list.component';
import { PokedexRoutingModule } from './pokedex-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PokedexRoutingModule
  ],
  declarations: [PokedexPokemonListComponent]
})
export class PokedexModule { }
