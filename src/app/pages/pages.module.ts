import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VotacionComponent } from './votacion/votacion.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [HomeComponent, VotacionComponent, EncuestaComponent, PerfilComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
