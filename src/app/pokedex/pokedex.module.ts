import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PokemonListComponent]
})
export class PokedexModule { }
