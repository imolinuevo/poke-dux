import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Array<Pokemon>;

  constructor(private pokemonService: PokemonService) { }

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
