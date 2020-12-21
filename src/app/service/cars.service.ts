import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CarsModel } from '../model/cars/cars.model';


@Injectable({
    providedIn: 'root'
})
export class CarsService {
formData: CarsModel;

constructor( private firestor : AngularFirestore){

}

carsList()
{

return this.firestor.collection('cars').snapshotChanges();

}

}
