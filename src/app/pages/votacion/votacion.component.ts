import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncuestaModel } from '../../models/encuestas';
import { EncuestasService } from '../../services/encuestas.service';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent implements OnInit {

  constructor(private encuestaService: EncuestasService, private activatedRoute: ActivatedRoute) { }

  const encuesta: EncuestaModel;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    console.log({ id });
    this.encuesta = this.encuestaService.obtenerEncuesta(id) as EncuestaModel;
    // this.encuesta = encuestaTmp;
    // this.activatedRoute.params.subscribe({
    //   next: params => {
    //     const encuestaTmp = this.encuestaService.encuestas.find(e => e.id === params.id);
    //     if (encuestaTmp) {
    //       this.encuesta = encuestaTmp;
    //     }
    //   },
    //   error: error => console.error('No se pudo encontrar la encuesta'),
    //   complete: () => console.log('Busqueda completada')
    // });
  }

}
