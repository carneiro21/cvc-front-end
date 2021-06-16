import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { ToolbarMainComponent } from './toolbar-main.component';
import { ToolbarPublicComponent } from './toolbar-public.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule
  ],
  declarations: [
    ToolbarMainComponent,
    ToolbarPublicComponent
  ],
  exports: [
    ToolbarMainComponent,
    ToolbarPublicComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToolbarModule {
}
