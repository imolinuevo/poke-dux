import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Array<Pokemon> = [
    new Pokemon(1, 'bulbasaur', 69),
    new Pokemon(4, 'charmander', 85),
    new Pokemon(7, 'squirtle', 90)
  ];

  constructor() { }

  ngOnInit() {
  }

}
