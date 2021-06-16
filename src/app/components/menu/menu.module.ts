import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidemenuModule } from '../sidemenu/sidemenu.module';
import { MenuMainComponent } from './menu-main.component';
import { MenuPublicComponent } from './menu-public.component';
import { SearchPipe } from './search.pipe';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    SidemenuModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MenuMainComponent,
    MenuPublicComponent,
    SearchPipe
  ],
  exports: [
    MenuMainComponent,
    MenuPublicComponent,
    SearchPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule {
}
