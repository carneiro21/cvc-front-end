import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { CustomBreadcrumbComponent } from './custom-breadcrumb.component';

import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [
    CustomBreadcrumbComponent
  ],
  exports: [
    CustomBreadcrumbComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BreadcrumbModule {
}
