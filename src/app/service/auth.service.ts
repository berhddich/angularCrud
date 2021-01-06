import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data

  constructor(private afAuth: AngularFireAuth,
    private router: Router,) {

      {
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(user => {
          if (user) {
            this.userData = user;
            localStorage.setItem('user', JSON.stringify(this.userData));
            JSON.parse(localStorage.getItem('user'));
          } else {
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        })
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


  async logout() {

    return this.afAuth.signOut().then(res =>
      localStorage.removeItem('user')


    );

  }

  islogin() {

    if (localStorage.getItem('user')) {
      return true;
    }
    else {
      return false;
    }

  }
  currentUser() {
    const user = JSON.parse(localStorage.getItem('user'));

    return user

  }


}
