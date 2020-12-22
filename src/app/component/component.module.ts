import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';



const routes: Route[] = [
  {
    path: '',
    redirectTo: 'layout'
},
    {
        path: 'layout',
        loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule),
    },

    {
        path: '**',
        redirectTo: 'layout'
    }
];

@NgModule({
    declarations: [ ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule

    ],
    entryComponents: [  ],
})
export class ComponentModule { }
