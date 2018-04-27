import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Injectable()
export class PokemonService {

  private pokemonList: Array<Pokemon> = [
    new Pokemon(1, 'bulbasaur', 69),
    new Pokemon(4, 'charmander', 85),
    new Pokemon(7, 'squirtle', 90)
  ];

  constructor() { }

  getPokemonList(): Array<Pokemon> {
    return this.pokemonList;
  }
}
