import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { PokemonListComponent } from './pokedex/pokemon-list/pokemon-list.component';
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
                component: PokemonListComponent
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