import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialComponent } from './initial.component';

export const SISTEMA_ROUTES: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: InitialComponent, data: { breadcrumb: 'Home Page' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(SISTEMA_ROUTES)
  ]
})
export class InitialRoutesModule {
}
