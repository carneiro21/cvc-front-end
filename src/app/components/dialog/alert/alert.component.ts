import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  closeDialog() {
    const dialogsDom = document.getElementsByClassName('cdk-overlay-container');
    if (dialogsDom.length > 0) {
      dialogsDom[0].innerHTML = '';
    }
    this.dialogRef.close('ok');
  }

}
