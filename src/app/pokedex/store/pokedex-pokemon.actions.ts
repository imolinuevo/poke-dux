import { Action } from '@ngrx/store';
import { PokedexPokemon } from './pokedex-pokemon.reducer';

export const POKEDEX_DELETE = "[PokedexPokemon] Delete";

export class Delete implements Action {
    readonly type = POKEDEX_DELETE;
    constructor(public id: number){}
};

export type PokedexPokemonActions = Delete;