import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SnackBarService } from 'src/app/service/shared-service/studius-snack-bar/snack-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged;
  constructor(private _authService: AuthService,
    private router: Router,

    private _notify: SnackBarService,) {

      this.isLogged =this._authService.islogin();


     }

  ngOnInit() {
  }
  Logout() {
    this._authService.logout().then(() => {
      this._notify.openSuccess('Logout completed');
      this.router.navigate(['app/auth/login']);


    })
      .catch(function (error) {
        console.error("Error writing document: ", error);
        this._notify.openSuccess(error);

      });


  }


}
