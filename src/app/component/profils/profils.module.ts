import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilsComponent } from './profils.component';
import { CreateEditProfilsComponent } from './create-edit-profils/create-edit-profils.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';


const routes: Route[] = [
  {
    path: '',
    redirectTo: 'list'
},
    {
        path: 'list',
        component: ProfilsComponent
    },

    {
        path: '**',
        redirectTo: 'list'
    }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

    SharedModule,

  ],
  declarations: [ProfilsComponent , CreateEditProfilsComponent] ,
  entryComponents: [CreateEditProfilsComponent  ],
})
export class ProfilsModule { }
