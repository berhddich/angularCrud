import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SnackBarService } from 'src/app/service/shared-service/studius-snack-bar/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private _notify: SnackBarService,
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private router: Router,
    private _authService: AuthService,
    private _fs: AngularFirestore
  ) { }

  ngOnInit() {
    if (this._authService.islogin()) {

      this.router.navigate(['app/dashboard']);

    }

    this.registerForm = this.fb.group({
      email: [, Validators.required],
      frestName: [, Validators.required],
      lastNam: [, Validators.required],
      password: [, Validators.required],


    });
  }


  save(): void {

    this._authService.register(this.registerForm.value).then((auth) => {



      if (auth) {
        auth['user'].sendEmailVerification()
        this._fs.collection('users').doc(auth['user'].uid).set(this.registerForm.value).then( res =>{
          this._authService.signInWithEmailAndPassword(this.registerForm.value).then(log=>{

            this._notify.openSuccess('Register completed');
            localStorage.setItem('user', JSON.stringify(auth['user']))
            this.router.navigate(['app/dashboard']);
          })
        } )


      }



    })
      .catch(error => {

        this._notify.openSuccess(error);

      })


  }

}
