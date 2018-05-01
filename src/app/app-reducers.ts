import { ActionReducerMap } from '@ngrx/store';
import { pokedexPokemonReducer } from './pokedex/store/pokedex-pokemon.reducer';
import { bagPokemonReducer } from './bag/store/bag-pokemon.reducer';

export const reducers: ActionReducerMap<any> = {
    pokedexPokemon: pokedexPokemonReducer,
    bagPokemon: bagPokemonReducer
};