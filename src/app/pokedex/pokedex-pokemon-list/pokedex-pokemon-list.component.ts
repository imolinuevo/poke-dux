import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokedexPokemon } from '../pokedex-pokemon.model';
import { Observable } from 'rxjs/observable';
import * as actions from '../store/pokedex-pokemon.actions';
import * as fromPokedexPokemon from '../store/pokedex-pokemon.reducer';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokedex-pokemon-list.component.html',
  styleUrls: ['./pokedex-pokemon-list.component.css']
})
export class PokedexPokemonListComponent implements OnInit {

  pokemonList: Observable<any>;

  constructor(private store: Store<fromPokedexPokemon.State>) { }

  ngOnInit() {
    this.pokemonList = this.store.select(fromPokedexPokemon.selectAll);
  }

  deletePokedexPokemonFromList(id) {
    this.store.dispatch(new actions.Delete(id));
  }

}
