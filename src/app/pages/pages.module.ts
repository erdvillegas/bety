import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaModule } from './encuesta/encuesta.module';
import { HomeModule } from './home/home.module';
import { PerfilModule } from './perfil/perfil.module';
import { VotacionModule } from './votacion/votacion.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EncuestaModule,
    HomeModule,
    PerfilModule,
    VotacionModule,
    RouterModule
  ],
  exports: [
    EncuestaModule,
    HomeModule,
    PerfilModule,
    VotacionModule
  ]
})
export class PagesModule { }
