import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CarsModel, ListCarsModel } from 'src/app/model/cars/cars.model';
import { CarsService } from 'src/app/service/cars.service';
import { RemoveComponent } from '../../shared-component/remove/remove.component';
import { CreateCarsComponent } from './create-cars/create-cars.component';

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

    public dialog: MatDialog,
  ) {


  }

  ngOnInit(): void {
    this.list();

  }




  list(): void {
    this._carsService.carsList().subscribe(data => {
      this.carsList = data.map(e => {

        // this.cc.push() ;
        let t = e.payload.doc.data();
        return {
          id: e.payload.doc.id,
          cars: e.payload.doc.data() as CarsModel,
          // mobile: e.payload.doc.data()['mobile'],
          // fullName: e.payload.doc.data()['fullName'],
          // code3: e.payload.doc.data()['code3'],

        };


      })

    })


  }


  add(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = '360px';
    dialogConfig.width = '570px';


    this.dialog.open(CreateCarsComponent, dialogConfig).afterClosed()
      .subscribe(() => {

        this.list();
      });
  }

  edit(car: any): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = '360px';
    dialogConfig.width = '570px';
    dialogConfig.data = car;


    this.dialog.open(CreateCarsComponent, dialogConfig).afterClosed()
      .subscribe(() => {

        this.list();
      });


  }


  remove(id : number): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = '130px';
    dialogConfig.panelClass = 'event-form-dialog';
    dialogConfig.width = '360px';
    dialogConfig.data = {

      id: id,
      title: 'cars'
  };

    this.dialog.open(RemoveComponent, dialogConfig).afterClosed()
      .subscribe(() => {

        this.list();
      });


  }

}
