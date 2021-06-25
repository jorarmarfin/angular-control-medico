import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Miembros } from '../interfaces/miembros.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FireBaseServiceService {
  miembrosCollections!: AngularFirestoreCollection;
  miembros!: Observable<Miembros[]>;

  constructor(private firestore: AngularFirestore) {
  }
  getCollection(collection:string){
      return this.firestore.collection(collection).valueChanges();
  }
  getMiembros(){
    this.miembrosCollections = this.firestore.collection('Miembros');
    this.miembros = this.miembrosCollections.snapshotChanges().pipe(map(resp =>{
      return resp.map(a=>{
        const data = a.payload.doc.data() as Miembros;
        data.id = a.payload.doc.id
        return data;
      })
    }));
    return this.miembros;
  }
  agregarCollecionItem(miembro:Miembros){
    this.firestore.collection('Miembros').add(miembro);
  }
  deleteCollectionItem(id:string){
    this.firestore.doc(`Miembros/${id}`).delete();

  }
  actualizarCollectionItem(miembro:Miembros){
    this.firestore.doc(`Miembros/${miembro.id}`).update(miembro);

  }
  




}
