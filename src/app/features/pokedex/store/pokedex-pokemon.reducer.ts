import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import { PokedexPokemon } from '../pokedex-pokemon.model';
import * as actions from './pokedex-pokemon.actions';

export const pokedexPokemonAdapter = createEntityAdapter<PokedexPokemon>();
export interface State extends EntityState<PokedexPokemon> {};

const defaultPokdexPokemons = {
    ids: [1, 4, 7],
    entities: {
        1: {
            'id': 1,
            'name': 'bulbasaur',
            'weight': 69
        },
        4: {
            'id': 4,
            'name': 'charmander',
            'weight': 85
        },
        7: {
            'id': 7,
            'name': 'squirtle',
            'weight': 90
        }
    }
};

export const initialState: State = pokedexPokemonAdapter.getInitialState(defaultPokdexPokemons);

export function pokedexPokemonReducer(
    state: State = initialState,
    action: actions.PokedexPokemonActions
) {
    switch(action.type) {
        case actions.POKEDEX_DELETE:
            return pokedexPokemonAdapter.removeOne(action.id, state);
        default:
             return state;
    }
};

export const getPokedexPokemonState = createFeatureSelector<State>('pokedexPokemon');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = pokedexPokemonAdapter.getSelectors(getPokedexPokemonState);