import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { JeMenuModule } from '../sgi/je-menu/je-menu.module';
import { JeRodapeModule } from '../sgi/je-rodape/je-rodape.module';
import { MenuModule } from '../menu/menu.module';
import { SidemenuModule } from '../sidemenu/sidemenu.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MainComponent } from './main.component';
import { PublicComponent } from './public.component';
import { JeMenuComponent } from '../sgi/je-menu/je-menu.component';
import { JeRodapeComponent } from '../sgi/je-rodape/je-rodape.component';


@NgModule({
  declarations: [
    MainComponent,
    PublicComponent
  ],
  exports: [
    JeMenuComponent,
    JeRodapeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTableModule,
    PerfectScrollbarModule,
    SidemenuModule,
    JeMenuModule,
    JeRodapeModule,
    MenuModule,
    ToolbarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
