import { Injectable } from '@angular/core';
import { PokedexPokemon } from './pokedex-pokemon.model';

@Injectable()
export class PokedexPokemonService {

  private pokemonList: Array<PokedexPokemon> = [
    new PokedexPokemon(1, 'bulbasaur', 69),
    new PokedexPokemon(4, 'charmander', 85),
    new PokedexPokemon(7, 'squirtle', 90)
  ];

  constructor() { }

  getPokemonList(): Array<PokedexPokemon> {
    return this.pokemonList;
  }
}
