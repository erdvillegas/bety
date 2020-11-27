import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotacionRoutingModule } from './votacion-routing.module';
import { VotacionComponent } from './votacion.component';


@NgModule({
  declarations: [VotacionComponent],
  imports: [
    CommonModule,
    VotacionRoutingModule
  ]
})
export class VotacionModule { }
