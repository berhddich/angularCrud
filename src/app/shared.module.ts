import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRippleModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

import { MaterialFileInputModule } from 'ngx-material-file-input';

import localeFr from '@angular/common/locales/fr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackBarService } from './service/shared-service/studius-snack-bar/snack-bar.service';
export const DATETIME_FORMATS = {
  parse: {
    dateInput: 'l, L, LTS',
  },
  display: {
    dateInput: 'DD/MM/YYYY HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM-YYYY',
  },
};


registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [],
  providers: [SnackBarService


  ],
  imports: [MatSnackBarModule ],
  exports: SharedModule.MODULE_LIST,
  entryComponents: []
})
export class SharedModule {
  static readonly MODULE_LIST = [
    CommonModule,

    MatButtonModule,
    MatFormFieldModule,

    MatIconModule,
    MatInputModule,

    MatSelectModule,
    MatTreeModule,

    MatCheckboxModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,


    MatBadgeModule,
    MatCardModule,
    MatPaginatorModule,
    MatRippleModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MaterialFileInputModule,




  ];
}
