import * as actions from './bag-pokemon.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

export interface BagPokemon {
    name: string;
    pokemonId: number;
    pokemonName: string;
};

export const bagPokemonAdapter = createEntityAdapter<BagPokemon>();
export interface State extends EntityState<BagPokemon> {};

const defaultBagPokemons = {
    ids: ['sandalio', 'anacleto', 'teofilo', 'prudencio', 'amancio'],
    entities: {
        'sandalio': {
            'name': 'sandalio',
            'pokemonId': 7,
            'pokemonName': 'squirtle'
        },
        'anacleto': {
            'name': 'anacleto',
            'pokemonId': 7,
            'pokemonName': 'squirtle'
        },
        'teofilo': {
            'name': 'teofilo',
            'pokemonId': 7,
            'pokemonName': 'squirtle'
        },
        'prudencio': {
            'name': 'prudencio',
            'pokemonId': 7,
            'pokemonName': 'squirtle'
        },
        'amancio': {
            'name': 'amancio',
            'pokemonId': 4,
            'pokemonName': 'charmander'
        }
    }
};

export const initialState: State = bagPokemonAdapter.getInitialState(defaultBagPokemons);

export function bagPokemonReducer(
    state: State = initialState,
    action: actions.BagPokemonActions
) {
    switch(action.type) {
        case actions.DELETE:
            return bagPokemonAdapter.removeOne(action.id, state);
        default:
             return state;
    }
};

export const getBagPokemonState = createFeatureSelector<State>('bagPokemon');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = bagPokemonAdapter.getSelectors(getBagPokemonState);