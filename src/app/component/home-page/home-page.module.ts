import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { HomePageComponent } from './home-page.component';



const routes: Route[] = [
  {
    path: '' ,
    redirectTo: 'dashboard'
},
    {
        path: 'dashboard',
        component: HomePageComponent
    },

    {
        path: '**',
        redirectTo: 'dashboard'
    }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
        CommonModule,

        SharedModule,
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
