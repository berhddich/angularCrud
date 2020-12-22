import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateCarsComponent } from './create-cars/create-cars.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';



const routes: Route[] = [
  {
    path: '',
    redirectTo: 'list'
},
    {
        path: 'list',
        component: CarsComponent
    },

    {
        path: '**',
        redirectTo: 'list'
    }
];

@NgModule({
    declarations: [CarsComponent , CreateCarsComponent],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,

        SharedModule,


    ],
    entryComponents: [CreateCarsComponent  ],
})
export class CarsModule { }
