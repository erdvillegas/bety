import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { EncuestaModel } from '../models/encuestas';
import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  private itemsCollection: AngularFirestoreCollection<EncuestaModel>;
  public encuestas: EncuestaModel[] = [];
  public encuesta: any;

  constructor(private afs: AngularFirestore) {
    // this.itemsCollection = this.afs.collection<EncuestaModel>('encuestas', ref => ref.orderBy('creado', 'desc'));
  }

  cargarEncuestas() {
    // return this.itemsCollection.valueChanges();

    const encuestasLocal: EncuestaModel[] = [
      {
        id: '1',
        titulo: 'Encuesta 1',
        descripcion: 'Prueba de encuesta 1',
        creado: Date.now()
      },
      {
        id: '2',
        titulo: 'Encuesta 2',
        descripcion: 'Prueba de encuesta 2',
        creado: Date.now()
      },
      {
        id: '3',
        titulo: 'Encuesta 3',
        descripcion: 'Prueba de encuesta 3',
        creado: Date.now()
      },
      {
        id: '4',
        titulo: 'Encuesta 4',
        descripcion: 'Prueba de encuesta 4',
        creado: Date.now()
      },
    ];

    this.encuestas = encuestasLocal;

    return of(this.encuestas);
  }

  obtenerEncuesta(id: string): EncuestaModel|undefined {
    if (this.encuestas.length <= 0) {
      this.cargarEncuestas();
    }
    if (!id) {
      console.log('El id no debe ser vacia');
      return {} as EncuestaModel;
    }

    return this.encuestas.find(e => e.id === id);
  }
}
