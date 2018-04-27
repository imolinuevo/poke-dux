import { Injectable } from '@angular/core';
import { BagPokemon } from './bag-pokemon.model';

@Injectable()
export class BagPokemonService {

  private bagPokemonList: Array<BagPokemon> = [
    new BagPokemon('Sandalio', 7, 'squirtle'),
    new BagPokemon('Anacleto', 7, 'squirtle'),
    new BagPokemon('Teofilo', 7, 'squirtle'),
    new BagPokemon('Prudencio', 7, 'squirtle'),
    new BagPokemon('Amancio', 4, 'charmander')
  ];

  constructor() { }

  getBagPokemonList(): Array<BagPokemon> {
    return this.bagPokemonList;
  }

}
