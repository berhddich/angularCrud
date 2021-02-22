import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsAdminService {

constructor(private firestor: AngularFirestore) { }

List() {

  return this.firestor.collection('news-admin').snapshotChanges();

}

}
