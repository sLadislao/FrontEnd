import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(private snackBar : MatSnackBar) { }

  showNotification(displayMessage: string, buttonText: string, messageType: 'success'|'error' ) {
    const config: MatSnackBarConfig = {
      duration: 50000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'alert-type-fill-info'
    }
    this.snackBar.open(displayMessage, '', config)
  }
}
