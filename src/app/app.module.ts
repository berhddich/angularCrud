import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Route, RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { EmailVerificationComponent } from './component/email-verification/email-verification.component';




const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'app/dashboard' ,
    pathMatch: 'full'

},
    {
        path: 'app',
        children:[

          {
            path: 'work',
            canActivate: [AuthGuard],

            loadChildren: () => import('./component/component.module').then(m => m.ComponentModule),

        } ,

        {
          path: 'auth',
          loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule),

      },


        {
          path: '',

          loadChildren: () => import('./component/home-page/home-page.module').then(m => m.HomePageModule),

      }


        ]
    },

    {


      path: 'email-verification',
      component: EmailVerificationComponent
  }
    ,

    {
        path: '**',
        redirectTo: 'app/dashboard'

    }
];


@NgModule({
  declarations: [
    AppComponent ,
    NavbarComponent,
    EmailVerificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
