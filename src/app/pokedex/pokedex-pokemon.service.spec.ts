import { TestBed, inject } from '@angular/core/testing';

import { PokedexPokemonService } from './pokedex-pokemon.service';

describe('PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokedexPokemonService]
    });
  });

  it('should be created', inject([PokedexPokemonService], (service: PokedexPokemonService) => {
    expect(service).toBeTruthy();
  }));
});
