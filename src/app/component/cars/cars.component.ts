import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CarsModel, ListCarsModel } from 'src/app/model/cars/cars.model';
import { CarsService } from 'src/app/service/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {

  cars: CarsModel;
  carsList: ListCarsModel[];
  displayedColumns: string[] = ['fullName', 'code3', 'mobile'];


  constructor(private _carsService: CarsService,
    private _firestore: AngularFirestore
  ) {


  }

  ngOnInit(): void {
    this.list();

  }

  save(): void {
    this.cars = {

      code3: 'mar',
      fullName: 'abdou',
      mobile: '212642015564'


    }

    this._firestore.collection('cars').add(this.cars);


  }


  list(): void {
    this._carsService.carsList().subscribe(data => {
      this.carsList = data.map(e => {

      // this.cc.push() ;
      let t= e.payload.doc.data();
        return {
          id: e.payload.doc.id,
          cars:e.payload.doc.data() as CarsModel,
          // mobile: e.payload.doc.data()['mobile'],
          // fullName: e.payload.doc.data()['fullName'],
          // code3: e.payload.doc.data()['code3'],

        };


      })


      console.log(  this.carsList );


    })


  }



}
