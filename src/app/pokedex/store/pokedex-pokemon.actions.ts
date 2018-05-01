import { Action } from '@ngrx/store';
import { PokedexPokemon } from './pokedex-pokemon.reducer';

export const DELETE = "[PokedexPokemon] Delete";

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string){}
};

export type PokedexPokemonActions = Delete;