import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {JeRodapeComponent} from './je-rodape.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    JeRodapeComponent
  ],
  exports: [
    JeRodapeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeRodapeModule {
}
