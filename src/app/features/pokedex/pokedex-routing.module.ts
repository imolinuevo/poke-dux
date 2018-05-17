import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPokemonListComponent } from './pokedex-pokemon-list/pokedex-pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexPokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }