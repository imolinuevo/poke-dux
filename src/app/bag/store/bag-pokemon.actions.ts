import { Action } from '@ngrx/store';
import { BagPokemon } from './bag-pokemon.reducer';

export const BAG_DELETE = "[BagPokemon] Delete";
export const BAG_DEPRECATE = "[BagPokemon] Deprecate";

export class Delete implements Action {
    readonly type = BAG_DELETE;
    constructor(public id: string){}
};

export class Deprecate implements Action {
    readonly type = BAG_DEPRECATE;
    constructor(public id: number){}
};

export type BagPokemonActions = Delete | Deprecate;