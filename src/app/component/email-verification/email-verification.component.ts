import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private router: Router,
    private _authService: AuthService) { }

  ngOnInit() {

    if (!this._authService.islogin()) {
      this.router.navigate(['app/auth/login']);

    }

    else {

      if (this._authService.currentUser()) {

        this.router.navigate(['app/dashboard']);




      }
    }


  }



  verification()
  {

this._authService.verifyEmail()


  }
}
