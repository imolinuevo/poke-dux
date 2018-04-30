import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { PokedexPokemonListComponent } from './pokedex/pokedex-pokemon-list/pokedex-pokemon-list.component';
import { BagPokemonListComponent } from './bag/bag-pokemon-list/bag-pokemon-list.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/pokedex',
                pathMatch: 'full'
            },
            {
                path: 'pokedex',
                component: PokedexPokemonListComponent
            },
            {
                path: 'bag',
                component: BagPokemonListComponent
            },
            {
                path: '**',
                redirectTo: '/pokedex',
                pathMatch: 'full'
            }
        ]
    }
];