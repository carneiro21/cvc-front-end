import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {JeMenuComponent} from './je-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    JeMenuComponent
  ],
  exports: [
    JeMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JeMenuModule {
}
