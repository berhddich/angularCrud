import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { element } from 'protractor';
import { ListNewsAdminModel, NewsAdminModel, TypeNewsModel } from 'src/app/model/news-admin/news-admin';
import { NewsAdminService } from 'src/app/service/news-admin.service';
import { ListSharedService } from 'src/app/service/shared-service/list-shared.service';
import { RemoveComponent } from '../../shared-component/remove/remove.component';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';

@Component({
  selector: 'app-news-admin',
  templateUrl: './news-admin.component.html',
  styleUrls: ['./news-admin.component.scss']
})
export class NewsAdminComponent implements OnInit {

  listOfTypeNews: TypeNewsModel[];

  newsAdmin: NewsAdminModel;
  newsAdminList: ListNewsAdminModel[];
  displayedColumns: string[] = ['fullName', 'code3', 'mobile'];


  constructor(private _newsAdminService: NewsAdminService,
    private _listTypeNews: ListSharedService,


    public dialog: MatDialog,
  ) {

this.listOfTypeNews=this._listTypeNews.typeNewList();

  }

  ngOnInit(): void {
    this.list();

  }


  findElemenet( id:number)
  {
  return  this.listOfTypeNews.find(element=> element.id===id).libelle

  }

  list(): void {
    this._newsAdminService.List().subscribe(data => {
      this.newsAdminList = data.map(e => {

        // this.cc.push() ;
        let t = e.payload.doc.data();
        return {
          id: e.payload.doc.id,
          newsAdmin: e.payload.doc.data() as NewsAdminModel,
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
    dialogConfig.height = '560px';
    dialogConfig.width = '570px';


    this.dialog.open(AddEditNewsComponent, dialogConfig).afterClosed()
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


    this.dialog.open(AddEditNewsComponent, dialogConfig).afterClosed()
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
      title: 'news-admin'
  };

    this.dialog.open(RemoveComponent, dialogConfig).afterClosed()
      .subscribe(() => {

        this.list();
      });


  }

}
