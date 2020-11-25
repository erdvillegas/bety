import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotacionComponent } from './votacion.component';

const routes: Routes = [
  { path: 'votacion', component: VotacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotacionRoutingModule { }
