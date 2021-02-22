import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsAdminComponent } from './news-admin.component';
import { SharedModule } from 'src/app/shared.module';
import { Route, RouterModule } from '@angular/router';
import { AddEditNewsComponent } from './add-edit-news/add-edit-news.component';
const routes: Route[] = [
  {
    path: '',
    redirectTo: 'list'
},
    {
        path: 'list',
        component: NewsAdminComponent
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
  declarations: [NewsAdminComponent ,AddEditNewsComponent] ,
  entryComponents: [AddEditNewsComponent  ],
})
export class NewsAdminModule { }
