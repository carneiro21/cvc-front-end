import { ToolbarModule } from './../toolbar/toolbar.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { InitialRoutesModule } from './initial-routes.module';

import {MatCardModule} from '@angular/material/card';
import { InitialComponent } from './initial.component';

@NgModule({
    imports: [
      CommonModule,
      FlexLayoutModule,
      MatCardModule,
      BreadcrumbModule,
      InitialRoutesModule,
      ToolbarModule
    ],
    declarations: [
      InitialComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class InicialModule {
  }