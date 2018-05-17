import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { reducers } from './store/app-reducers';
import { AppEffects } from './store/app.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
