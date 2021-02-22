import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';



const routes: Route[] = [


  {
        path: 'cars',
        loadChildren: () => import('./app-component/cars/cars.module').then(m => m.CarsModule),
    },
    {
      path: 'profils',
      loadChildren: () => import('./app-component/profils/profils.module').then(m => m.ProfilsModule),
  },
  {
    path: 'news-admin',
    loadChildren: () => import('./app-component/news-admin/news-admin.module').then(m => m.NewsAdminModule),
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
