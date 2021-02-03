import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router,) {

    {
     this.user();
    }
  }





  async signInWithEmailAndPassword(loginFrom: any) {

    return new Promise((resolve, reject) => {

      this.afAuth.signInWithEmailAndPassword(loginFrom.email, loginFrom.password).then((userData) => resolve(userData), (error) => reject(error))

    })


  }


  async register(registerFrom: any) {


    return new Promise((resolve, reject) => {

      this.afAuth.createUserWithEmailAndPassword(registerFrom.email, registerFrom.password).then((userData) => resolve(userData), (error) => reject(error))
    })


  }


  logout() {

    return this.afAuth.signOut().then(res => {
      localStorage.clear();
      localStorage.getItem('user')
      this.router.navigate(['app/auth/login']);

    }


    );

  }

  islogin() {

    let user = JSON.parse(localStorage.getItem('user')) as boolean;

    if (user) {
      return true;
    }
    else {
      return false;
    }

  }
  currentUser() {

    let user = JSON.parse(localStorage.getItem('user'));

    if (user) { return user.emailVerified }


    return false

  }

  user() {

    this.afAuth.authState.subscribe(
      (user) => {
        localStorage.clear();

        localStorage.setItem('user', JSON.stringify(user)) });

  }

  verifyEmail() {
    this.afAuth.authState.subscribe(
      (user) => user.sendEmailVerification().then(
        () => console.log('email sent')));
  }

}
