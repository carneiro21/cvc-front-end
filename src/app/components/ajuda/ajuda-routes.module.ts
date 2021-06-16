import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AjudaComponent } from './ajuda.component';

const BREADCRUMB_ROUTES: Routes = [
  { path: ':codigo', component: AjudaComponent, data: { breadcrumb: 'Conteúdo de Ajuda' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(BREADCRUMB_ROUTES)
  ]
})
export class AjudaRoutesModule {
}
