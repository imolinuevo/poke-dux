import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { mapTo, switchMap } from 'rxjs/operators';
import * as pokedexPokemonActions from '../features/pokedex/store/pokedex-pokemon.actions';
import * as bagPokemonActions from '../features/bag/store/bag-pokemon.actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    public deletePokedexPokemon$: Observable<bagPokemonActions.Deprecate> = this.actions$
        .ofType(pokedexPokemonActions.POKEDEX_DELETE)
        .map((action: pokedexPokemonActions.Delete) => new bagPokemonActions.Deprecate(action.id))
}