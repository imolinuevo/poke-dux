import { Action } from '@ngrx/store';
import { BagPokemon } from './bag-pokemon.reducer';

export const BAG_DELETE = "[BagPokemon] Delete";

export class Delete implements Action {
    readonly type = BAG_DELETE;
    constructor(public id: string){}
};

export type BagPokemonActions = Delete;