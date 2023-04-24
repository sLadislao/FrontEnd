import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from "../../components/confirm-dialog/confirm-dialog.component";
import { MatDialog } from "@angular/material/dialog";
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private readonly matDialog: MatDialog) { }

  openConfirmDialog(message: string, entity: string) {
    return this.matDialog.open(ConfirmDialogComponent,  {
      width: '400px',
      disableClose: true,
      data: {
        message,
        entity
      }
    })
  }

}
