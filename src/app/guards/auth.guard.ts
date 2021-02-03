import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(
        private router: Router,
        private _authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authService.islogin() ) {
            // logged in so return true
            if(this._authService.currentUser())
            {
              //  this.router.navigate(['app/dashboard']);

               return true;}
            else{

              this.router.navigate(['email-verification']);
              return false;
            }

        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['app/auth/login']);
        return false;
    }



    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: any): boolean {
        // const url = `/${route.path}`;
        return this.canActivate(route, null);
    }

    canActivateByPermissions(): boolean {


        return false;
    }

}
