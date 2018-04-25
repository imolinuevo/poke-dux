import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { PokemonListComponent } from './pokedex/pokemon-list/pokemon-list.component';

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
                path: '**',
                redirectTo: '/pokedex',
                pathMatch: 'full'
            }
        ]
    }
];