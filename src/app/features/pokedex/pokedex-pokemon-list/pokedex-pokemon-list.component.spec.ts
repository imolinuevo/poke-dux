import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexPokemonListComponent } from './pokedex-pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokedexPokemonListComponent;
  let fixture: ComponentFixture<PokedexPokemonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexPokemonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexPokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
