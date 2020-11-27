import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { EncuestaModel } from '../models/encuestas';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {

  private itemsCollection: AngularFirestoreCollection<EncuestaModel>;
  public encuestas: EncuestaModel[] = [];
  public encuesta: any;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection<EncuestaModel>('encuestas', ref => ref.orderBy('creado', 'desc'));
  }

  cargarEncuestas() {
    return this.itemsCollection.valueChanges();
  }
}
