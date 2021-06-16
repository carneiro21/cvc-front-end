import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { AjudaRoutesModule } from './ajuda-routes.module';
import { AjudaComponent } from './ajuda.component';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BreadcrumbModule,
    AjudaRoutesModule
  ],
  declarations: [
    AjudaComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AjudaModule {
}
