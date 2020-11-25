import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('../pages/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path: 'votacion',
    loadChildren: () => import('../pages/votacion/votacion.module').then(m => m.VotacionModule)
  },
  {
    path: 'encuesta',
    loadChildren: () => import('../pages/encuesta/encuesta.module').then(m => m.EncuestaModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
