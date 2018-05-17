import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    LayoutModule
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
