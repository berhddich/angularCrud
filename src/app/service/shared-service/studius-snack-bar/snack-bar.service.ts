import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig,
} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    private config: MatSnackBarConfig<any> = {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
    };

    constructor(private _snackBar: MatSnackBar) { }

    openSuccess(message: string): void {
        this.open(message, 'Ok');
    }

    openError(message: string): void {
        this.open(message, 'Retry');
    }

    private open(message: string, action: string): void {
        this._snackBar.open(message, action, this.config);
    }
}
