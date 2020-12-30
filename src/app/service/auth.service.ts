import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private router: Router,) { }





    async signInWithEmailAndPassword(loginFrom: any) {

    return new Promise((resolve, reject) => {

      this.afAuth.signInWithEmailAndPassword(loginFrom.email, loginFrom.password).then((userData) => resolve(userData), (error) => reject(error))

    })


  }

  async logout() {

    return this.afAuth.signOut();

  }

  islogin() {

    return true;



  }


}
