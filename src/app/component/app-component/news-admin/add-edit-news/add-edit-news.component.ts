import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TypeNewsModel } from 'src/app/model/news-admin/news-admin';
import { ListSharedService } from 'src/app/service/shared-service/list-shared.service';
import { SnackBarService } from 'src/app/service/shared-service/studius-snack-bar/snack-bar.service';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from "rxjs/operators"
import { url } from 'inspector';
import { Console } from 'console';

@Component({
  selector: 'app-add-edit-news',
  templateUrl: './add-edit-news.component.html',
  styleUrls: ['./add-edit-news.component.scss']
})
export class AddEditNewsComponent implements OnInit {

  createEditForm: FormGroup;
  saving = false;
  data;
  listOfTypeNews: TypeNewsModel[];
  formData = new FormData();
  private maxFilesBytesUserFriendlyValue = 5;
  isEmpty = true;
  file;
 base64textString = '';
 img='assets/img/Placeholder.jpg';
 selectedImage:any= null;

  constructor(
    private fb: FormBuilder,
    private afs:AngularFireStorage,
    private _firestore: AngularFirestore,
    private _notify: SnackBarService,
    private _listTypeNews: ListSharedService,
    public dialogRef: MatDialogRef<AddEditNewsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.data = data;
    this.listOfTypeNews = this._listTypeNews.typeNewList();

  }

  ngOnInit() {

    if (this.data) {
      this.createEditForm = this.fb.group({
        titre: [this.data.news.titre, Validators.required],
        type: [this.data.news.type, Validators.required],
        Subject: [this.data.news.Subject, Validators.required],
        source: [this.data.news.Subject],
        storage: [this.data.news.storage]

      });

    }
    else {

      this.createEditForm = this.fb.group({
        titre: [, Validators.required],
        type: [, Validators.required],
        Subject: [, Validators.required],
        source: [],
        storage: '',

      });

    }


    console.log(this.data);

  }

  save(): void {

    this.saving = true;



    if (!this.data) {

      let filepath=`newsAdmin/images/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef=this.afs.ref(filepath);
      this.afs.upload(filepath,this.selectedImage).snapshotChanges().pipe(

  finalize(()=>{
    fileRef.getDownloadURL().subscribe((url)=>{
       this.createEditForm.controls['storage'].setValue(url);

       this._firestore.collection('news-admin').add(this.createEditForm.value).then(() => {
        this._notify.openSuccess('Save completed');
        this.saving = false;
        this.close();
      })
        .catch(function (error) {
          console.error("Error writing document: ", error);
          this._notify.openSuccess(error);
          this.saving = false;
        });

    })
  })

      ).subscribe();


    }

    else {


      this._firestore.doc('news-admin/' + this.data.id).update(this.createEditForm.value).then(() => {
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

  showPriview(event: any)
  {
if(event.target.files && event.target.files[0])
{

  const reader=new FileReader();
  reader.onload=(e:any)=> this.img=e.target.result
  reader.readAsDataURL(event.target.files[0]);
  this.selectedImage=event.target.files[0];
}
else{

  this.selectedImage=null;
  this.img='assets/img/Placeholder.jpg';

}


  }

}
