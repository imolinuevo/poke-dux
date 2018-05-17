import { ActionReducerMap } from '@ngrx/store';
import { pokedexPokemonReducer } from '../features/pokedex/store/pokedex-pokemon.reducer';
import { bagPokemonReducer } from '../features/bag/store/bag-pokemon.reducer';

export const reducers: ActionReducerMap<any> = {
    pokedexPokemon: pokedexPokemonReducer,
    bagPokemon: bagPokemonReducer
};