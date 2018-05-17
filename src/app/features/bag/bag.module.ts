import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';
import { BagPokemonListComponent } from './bag-pokemon-list/bag-pokemon-list.component';
import { BagRoutingModule } from './bag-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BagRoutingModule
  ],
  declarations: [BagPokemonListComponent]
})
export class BagModule { }
