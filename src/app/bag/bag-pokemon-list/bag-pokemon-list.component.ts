import { Component, OnInit } from '@angular/core';
import { BagPokemon } from '../bag-pokemon.model';
import { BagPokemonService } from '../bag-pokemon.service';

@Component({
  selector: 'app-bag-pokemon-list',
  templateUrl: './bag-pokemon-list.component.html',
  styleUrls: ['./bag-pokemon-list.component.css']
})
export class BagPokemonListComponent implements OnInit {

  bagPokemonList: Array<BagPokemon>;

  constructor(private bagPokemonService: BagPokemonService) { }

  ngOnInit() { 
    this.bagPokemonList = this.bagPokemonService.getBagPokemonList();
  }

  deleteBagPokemonFromList(name: string) {
    this.bagPokemonList.forEach((item, index) => {
      if (item.name === name) {
        this.bagPokemonList.splice(index, 1);
      }
    });
  }

}
