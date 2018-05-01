import { Action } from '@ngrx/store';
import { BagPokemon } from './bag-pokemon.reducer';

export const DELETE = "[BagPokemon] Delete";

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string){}
};

export type BagPokemonActions = Delete;