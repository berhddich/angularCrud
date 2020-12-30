import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from 'src/app/shared.module';


const routes: Route[] = [

    {
        path: 'login',
        component: LoginComponent ,
    },
    {
      path: 'register',
      component:  RegisterComponent
  },


];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  declarations: [LoginComponent , RegisterComponent]
})
export class AuthModule { }
