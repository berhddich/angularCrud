import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { SnackBarService } from 'src/app/service/shared-service/studius-snack-bar/snack-bar.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.scss']
})

export class RemoveComponent implements OnInit {
id;
title;
  constructor(private _notify: SnackBarService,
    private _firestore: AngularFirestore,
    public dialogRef: MatDialogRef<RemoveComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

      this.id = data.id;
      this.title = data.title;
     }

  ngOnInit() {


  }

  delete(): void{


    this._firestore.doc(this.title+'/'+this.id).delete().then(() => {
      this._notify.openSuccess('Delete completed');

      this.close();
    })
      .catch(function (error) {
        console.error("Error writing document: ", error);
        this._notify.openSuccess(error);

      });

  }

  close(): void {
    this.dialogRef.close();
  }

}
