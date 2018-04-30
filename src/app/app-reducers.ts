import { ActionReducerMap } from '@ngrx/store';
import { pokedexPokemonReducer } from './pokedex/reducer/pokedex-pokemon.reducer';
import { bagPokemonReducer } from './bag/reducer/bag-pokemon.reducer';

export const reducers: ActionReducerMap<any> = {
    pokedexPokemon: pokedexPokemonReducer,
    bagPokemon: bagPokemonReducer
};