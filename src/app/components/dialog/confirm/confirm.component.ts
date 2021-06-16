import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  closeDialog(status: any) {
    const dialogsDom = document.getElementsByClassName('cdk-overlay-container');
    if (dialogsDom.length > 0) {
      dialogsDom[0].innerHTML = '';
    }
    this.dialogRef.close(status);
  }

}
