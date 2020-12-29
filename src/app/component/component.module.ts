import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';



const routes: Route[] = [


  {
        path: 'cars',
        loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule),
    },
    {
      path: 'profils',
      loadChildren: () => import('./profils/profils.module').then(m => m.ProfilsModule),
  },



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
