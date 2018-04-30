import { Component, OnInit } from '@angular/core';
import { PokedexPokemon } from '../pokedex-pokemon.model';
import { PokedexPokemonService } from '../pokedex-pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokedex-pokemon-list.component.html',
  styleUrls: ['./pokedex-pokemon-list.component.css']
})
export class PokedexPokemonListComponent implements OnInit {

  pokemonList: Array<PokedexPokemon>;

  constructor(private pokemonService: PokedexPokemonService) { }

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  deletePokemonFromList(name: string) {
    this.pokemonList.forEach((item, index) => {
      if (item.name === name) {
        this.pokemonList.splice(index, 1);
      }
    });
  }

}
