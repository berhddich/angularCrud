import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { SnackBarService } from 'src/app/service/shared-service/studius-snack-bar/snack-bar.service';


@Component({
  selector: 'app-create-cars',
  templateUrl: './create-cars.component.html',
  styleUrls: ['./create-cars.component.scss']
})
export class CreateCarsComponent implements OnInit {
  createCarsForm :  FormGroup;
  saving = false;
  data;

  constructor(
    private fb: FormBuilder,
    private _firestore: AngularFirestore,
    private _notify: SnackBarService,
    public dialogRef: MatDialogRef<CreateCarsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.data = data;


  }

  ngOnInit() {

    if(this.data)
    {
      this.createCarsForm = this.fb.group({
        code3: [this.data.cars.code3, Validators.required],
        fullName: [this.data.cars.fullName, Validators.required],
        mobile: [this.data.cars.mobile, Validators.required],

      });

    }
    else{

      this.createCarsForm = this.fb.group({
        code3: [, Validators.required],
        fullName: [, Validators.required],
        mobile: [, Validators.required],

      });

    }


    console.log(this.data);

  }

  save(): void {

    this.saving = true;

    if(!this.data)
    {

      this._firestore.collection('cars').add(this.createCarsForm.value).then(() => {
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


      this._firestore.doc('cars/'+this.data.id).update(this.createCarsForm.value).then(() => {
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
