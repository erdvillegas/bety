import { Component, OnInit } from '@angular/core';
import { EncuestasService } from '../../services/encuestas.service';
import { EncuestaModel } from '../../models/encuestas';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuestas: EncuestaModel[] = [];
  cargando: boolean = true;

  constructor(private encuestasServices: EncuestasService,  private router: Router) { }

  ngOnInit(): void {
    this.cargarEncuestas();
  }

  cargarEncuestas() {
    this.encuestasServices.cargarEncuestas()
      .subscribe(
        (encuestas: EncuestaModel[]) => {
          this.encuestas = encuestas;
        },
        error => {
          console.error('No se pudieron obtener las encuestas');
          this.cargando = false;
        },
        () => this.cargando = false
      );
  }

  navegar(id: string) {

    if (!id) {
      console.error('No se recibio ID válido');
      return;
    }

    this.router.navigate(['/votacion', id]);
  }

}
