import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestaRoutingModule } from './encuesta-routing.module';
import { MaterialModule } from '../../material.module';
import { EncuestaComponent } from './encuesta.component';


@NgModule({
  declarations: [EncuestaComponent],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    MaterialModule
  ]
})
export class EncuestaModule { }
