import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PokedexPokemonListComponent } from './pokedex-pokemon-list/pokedex-pokemon-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PokedexPokemonListComponent]
})
export class PokedexModule { }
