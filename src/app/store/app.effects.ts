import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as bagPokemonActions from '../features/bag/store/bag-pokemon.actions';
import * as pokedexPokemonActions from '../features/pokedex/store/pokedex-pokemon.actions';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    public deletePokedexPokemon$: Observable<bagPokemonActions.Deprecate> = this.actions$
        .ofType(pokedexPokemonActions.POKEDEX_DELETE)
        .map((action: pokedexPokemonActions.Delete) => new bagPokemonActions.Deprecate(action.id))
}