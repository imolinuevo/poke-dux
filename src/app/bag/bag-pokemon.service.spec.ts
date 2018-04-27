import { TestBed, inject } from '@angular/core/testing';

import { BagPokemonService } from './bag-pokemon.service';

describe('BagPokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BagPokemonService]
    });
  });

  it('should be created', inject([BagPokemonService], (service: BagPokemonService) => {
    expect(service).toBeTruthy();
  }));
});
