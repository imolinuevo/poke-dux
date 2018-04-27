import { Component, OnInit } from '@angular/core';
import { BagPokemon } from '../bag-pokemon.model';

@Component({
  selector: 'app-bag-pokemon-list',
  templateUrl: './bag-pokemon-list.component.html',
  styleUrls: ['./bag-pokemon-list.component.css']
})
export class BagPokemonListComponent implements OnInit {

  bagPokemonList: Array<BagPokemon> = [
    new BagPokemon('Sandalio', 7, 'squirtle'),
    new BagPokemon('Anacleto', 7, 'squirtle'),
    new BagPokemon('Teofilo', 7, 'squirtle'),
    new BagPokemon('Prudencio', 7, 'squirtle'),
    new BagPokemon('Amancio', 4, 'charmander')
  ];

  constructor() { }

  ngOnInit() {
  }

}
