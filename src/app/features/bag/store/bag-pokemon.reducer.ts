import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import { BagPokemon } from '../bag-pokemon.model';
import * as actions from './bag-pokemon.actions';

export const bagPokemonAdapter = createEntityAdapter<BagPokemon>();
export interface State extends EntityState<BagPokemon> { };

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
    switch (action.type) {
        case actions.BAG_DELETE:
            return bagPokemonAdapter.removeOne(action.id, state);
        case actions.BAG_DEPRECATE:

            return bagPokemonAdapter.removeMany(getBagPokemonsByPokemonId(state, action), state);
        default:
            return state;
    }
};

function getBagPokemonsByPokemonId(state, action) {
    var entities = Object.keys(state.entities).map(function (index) {
        let entity = state.entities[index];
        return entity;
    });
    var ids: string[] = [];
    entities.forEach(entity => {
        if (entity.pokemonId === action.id) {
            ids.push(entity.name)
        }
    });
    return ids;
}

export const getBagPokemonState = createFeatureSelector<State>('bagPokemon');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = bagPokemonAdapter.getSelectors(getBagPokemonState);