import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/service/shared-service/studius-snack-bar/snack-bar.service';

@Component({
  selector: 'app-create-edit-profils',
  templateUrl: './create-edit-profils.component.html',
  styleUrls: ['./create-edit-profils.component.scss']
})
export class CreateEditProfilsComponent implements OnInit {
  createOredit :  FormGroup;
  saving = false;
  data;
  constructor( private fb: FormBuilder,
    private _firestore: AngularFirestore,
    private _notify: SnackBarService,
    public dialogRef: MatDialogRef<CreateEditProfilsComponent>,
    @Inject(MAT_DIALOG_DATA) data) { this.data = data;}

  ngOnInit() {

    if(this.data)
    {
      this.createOredit = this.fb.group({
        firstName: [this.data.profil.firstName, Validators.required],
        lastName: [this.data.profil.lastName, Validators.required],
        age: [this.data.profil.age, Validators.required],
        nationalite: [this.data.profil.nationalite, Validators.required],
        email: [this.data.profil.email, Validators.required],
        phoneNumber: [this.data.profil.phoneNumber, Validators.required],

      });

    }
    else{

      this.createOredit = this.fb.group({
        firstName: [, Validators.required],
        lastName: [, Validators.required],
        age: [, Validators.required],
        nationalite: [, Validators.required],
        email: [, Validators.required],
        phoneNumber: [, Validators.required],

      });

    }


    console.log(this.data);

  }


  save(): void {

    this.saving = true;

    if(!this.data)
    {

      this._firestore.collection('profils').add(this.createOredit.value).then(() => {
        this._notify.openSuccess('Save completed');
        this.saving = false;
        this.close();
      })
        .catch(function (error) {
          console.error("Error writing document: ", error);
          this._notify.openSuccess(error);
          this.saving = false;
        });


    }

    else{


      this._firestore.doc('profils/'+this.data.id).update(this.createOredit.value).then(() => {
        this._notify.openSuccess('Update completed');
        this.saving = false;
        this.close();
      })
        .catch(function (error) {
          console.error("Error writing document: ", error);
          this._notify.openSuccess(error);
          this.saving = false;
        });


    }



  }

  close(): void {
    this.dialogRef.close();
  }

}
