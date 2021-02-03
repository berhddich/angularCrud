import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router,
    private _authService: AuthService) { }

  ngOnInit() {

    if (!(this._authService.islogin())) {

      this.router.navigate(['app/auth/login']);

    }
  }



}
