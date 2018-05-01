import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BagPokemon } from '../bag-pokemon.model';
import { Observable } from 'rxjs/observable';
import * as actions from '../store/bag-pokemon.actions';
import * as fromBagPokemon from '../store/bag-pokemon.reducer';

@Component({
  selector: 'app-bag-pokemon-list',
  templateUrl: './bag-pokemon-list.component.html',
  styleUrls: ['./bag-pokemon-list.component.css']
})
export class BagPokemonListComponent implements OnInit {

  bagPokemonList: Observable<any>;

  constructor(private store: Store<fromBagPokemon.State>) { }

  ngOnInit() { 
    this.bagPokemonList = this.store.select(fromBagPokemon.selectAll);
  }

  deleteBagPokemonFromList(name) {
    this.store.dispatch(new actions.Delete(name));
  }

}
