import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { mapTo } from 'rxjs/operators';
import * as pokedexPokemonActions from './pokedex/store/pokedex-pokemon.actions';
import * as bagPokemonActions from './bag/store/bag-pokemon.actions';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    public deletePokedexPokemon$ = this.actions$.ofType(pokedexPokemonActions.POKEDEX_DELETE).pipe(
        mapTo(new bagPokemonActions.Delete('amancio'))
    );
}