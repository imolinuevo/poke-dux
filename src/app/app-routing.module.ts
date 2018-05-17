import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout/layout.component';

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
                loadChildren: './features/pokedex/pokedex.module#PokedexModule'
            },
            {
                path: 'bag',
                loadChildren: './features/bag/bag.module#BagModule'
            },
            {
                path: '**',
                redirectTo: '/pokedex',
                pathMatch: 'full'
            }
        ]
    }
];