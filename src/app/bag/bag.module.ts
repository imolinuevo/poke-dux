import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BagPokemonListComponent } from './bag-pokemon-list/bag-pokemon-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [BagPokemonListComponent]
})
export class BagModule { }
