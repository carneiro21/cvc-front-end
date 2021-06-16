import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideitemComponent } from './item/sideitem.component';
import { SidemenuComponent } from './menu/sidemenu.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  declarations: [SidemenuComponent, SideitemComponent],
  exports: [SidemenuComponent, SideitemComponent]
})
export class SidemenuModule {
}
