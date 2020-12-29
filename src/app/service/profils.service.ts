import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  constructor(private firestor: AngularFirestore) { }

  profilList() {

    return this.firestor.collection('profils').snapshotChanges();

  }

}
