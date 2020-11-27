import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EncuestasService } from '../../services/encuestas.service';
import { EncuestaModel } from '../../models/encuestas';
import Swiper from 'swiper';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit, AfterViewInit {

  encuestas: EncuestaModel[] = [];
  cargando: boolean = true;

  constructor(private encuestasServices: EncuestasService) { }

  ngOnInit(): void {
    this.cargarEncuestas();
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 40,
      loop: true
    });
  }

  cargarEncuestas() {
    this.encuestasServices.cargarEncuestas().subscribe(
      (encuestas: EncuestaModel[]) => {
        this.encuestas = encuestas;
        console.log(encuestas);
      },
      error => {
        console.error('No se pudieron obtener las encuestas');
        this.cargando = false;
      },
      () => this.cargando = false
    );
  }
}
