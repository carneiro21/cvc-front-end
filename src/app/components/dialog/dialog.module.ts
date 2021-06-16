import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';

import { InactivityAlertComponent } from './inactivity-alert/inactivity.alert.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  declarations: [
    AlertComponent,
    ConfirmComponent,
    InactivityAlertComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {
}
