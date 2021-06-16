import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-inactivity-alert',
  templateUrl: './inactivity.alert.component.html'
})
export class InactivityAlertComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 0;
  intervalId: any;

  constructor(public dialogRef: MatDialogRef<InactivityAlertComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.value++;
      if (this.value === 100) {
        clearInterval(this.intervalId); // para o intervalo quando chegar a 100%
      }
    }, this.data.interval);
  }

  closeDialog() {
    const dialogsDom = document.getElementsByClassName('cdk-overlay-container');
    if (dialogsDom.length > 0) {
      dialogsDom[0].innerHTML = '';
    }
    if (!!this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.dialogRef.close('ok');
  }
}
