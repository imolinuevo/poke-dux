import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { PokedexModule } from './pokedex/pokedex.module';
import { PokemonListComponent } from './pokedex/pokemon-list/pokemon-list.component';

const appRoutes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'pokedex',
        component: PokemonListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    LayoutModule,
    PokedexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
