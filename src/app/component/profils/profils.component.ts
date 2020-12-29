import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListProfilsodel, ProfilsModel } from 'src/app/model/profils/profils.model';
import { ProfilsService } from 'src/app/service/profils.service';
import { RemoveComponent } from '../shared-component/remove/remove.component';
import { CreateEditProfilsComponent } from './create-edit-profils/create-edit-profils.component';

@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {
  profils: ProfilsModel;
  profilsList: ListProfilsodel[];
  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'nationalite', 'email', 'phoneNumber'];

  constructor(private _profilsService: ProfilsService, public dialog: MatDialog,) { }
  ngOnInit(): void {
    this.list();

  }




  list(): void {
    this._profilsService.profilList().subscribe(data => {
      this.profilsList = data.map(e => {


        let t = e.payload.doc.data();
        return {
          id: e.payload.doc.id,
          profil: e.payload.doc.data() as ProfilsModel,


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


    this.dialog.open(CreateEditProfilsComponent, dialogConfig).afterClosed()
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


    this.dialog.open(CreateEditProfilsComponent, dialogConfig).afterClosed()
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
      title: 'profils'
  };

    this.dialog.open(RemoveComponent, dialogConfig).afterClosed()
      .subscribe(() => {

        this.list();
      });


  }


}
