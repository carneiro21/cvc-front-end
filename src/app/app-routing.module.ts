import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    {
      path: 'main', component: MainComponent, children: [
        {path: 'home', loadChildren: () => import('./components/initial/initial.module').then((m) => m.InicialModule), data: {breadcrumb: 'Home'}},
        {path: '**', redirectTo: 'home/index', pathMatch: 'prefix'}
      ], data: {breadcrumb: 'CVC'}
      
    }, 
    {path: '**', redirectTo: 'main/home/index', pathMatch: 'prefix'} 
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}