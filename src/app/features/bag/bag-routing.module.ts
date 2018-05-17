import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagPokemonListComponent } from './bag-pokemon-list/bag-pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: BagPokemonListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BagRoutingModule { }