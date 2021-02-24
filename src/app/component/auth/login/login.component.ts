import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConfig } from 'src/app/config';
import { AuthService } from 'src/app/service/auth.service';
import { SnackBarService } from 'src/app/service/shared-service/studius-snack-bar/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;

  constructor(
    private _notify: SnackBarService,
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private router: Router,
    private _authService: AuthService) {
      if (this._authService.islogin()) {
        AppConfig.footer=true;
        AppConfig.navbar=true;
        AppConfig.sidebar=true;
        this.router.navigate(['app/dashboard']);

      }
      else{

        AppConfig.footer=false;
        AppConfig.navbar=false;
        AppConfig.sidebar=false;



      }
  }

  ngOnInit() {



    this.loginForm = this.fb.group({
      email: [, Validators.required],
      password: [, Validators.required],


    });


  }

  save(): void {
    this._authService.signInWithEmailAndPassword(this.loginForm.value).then((auth) => {


      if (auth) {
        this._notify.openSuccess('Login completed');
        localStorage.setItem('user', JSON.stringify(auth['user']))
        this.router.navigate(['app/dashboard']);

        AppConfig.footer=true;
        AppConfig.navbar=true;
        AppConfig.sidebar=true;


      }



    })
      .catch(error => {

        this._notify.openSuccess(error);

      })


  }

}
