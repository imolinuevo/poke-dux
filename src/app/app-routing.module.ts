import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

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
                loadChildren: './pokedex/pokedex.module#PokedexModule'
            },
            {
                path: 'bag',
                loadChildren: './bag/bag.module#BagModule'
            },
            {
                path: '**',
                redirectTo: '/pokedex',
                pathMatch: 'full'
            }
        ]
    }
];