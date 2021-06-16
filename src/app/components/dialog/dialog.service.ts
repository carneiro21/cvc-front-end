import {Injectable} from '@angular/core';
import {MatDialogRef, MatDialog, MatDialogConfig} from '@angular/material/dialog';

import {AlertComponent} from './alert/alert.component';
import {ConfirmComponent} from './confirm/confirm.component';
import { InactivityAlertComponent } from './inactivity-alert/inactivity.alert.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  public alert(message: string, title?: string, callbackOk?: any): MatDialogRef<AlertComponent, MatDialogConfig> {
    const dialogRef = this.dialog.open(AlertComponent, this.getDialogConfig(message, title));
    if (!!callbackOk) {
      dialogRef.afterClosed().subscribe(callbackOk);
    }
    return dialogRef;
  }

  public confirm(message: string, title?: string, callbackOk?: any, callbackCancel?: any): MatDialogRef<ConfirmComponent, MatDialogConfig> {
    const dialogRef = this.dialog.open(ConfirmComponent, this.getDialogConfig(message, title));
    if (!!callbackOk || !!callbackCancel) {
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result === 'ok') {
          callbackOk(result);
        } else {
          callbackCancel(result);
        }
      });
    }
    return dialogRef;
  }

  public inactivityalert(interval: number, message: string, title?: string,  callback?: any): MatDialogRef<InactivityAlertComponent, MatDialogConfig> {
    const dialogRef = this.dialog.open(InactivityAlertComponent, this.getDialogConfig(message, title, interval));
    if (!!callback) {
      dialogRef.afterClosed().subscribe(callback);
    }
    return dialogRef;
  }

  private getDialogConfig(message: string, title?: string, interval?: number): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title,
      text: message,
      interval
    };
    return dialogConfig;
  }
}
