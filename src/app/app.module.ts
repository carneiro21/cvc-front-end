import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDECH from '@angular/common/locales/en';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppException } from './app.exception';
import { DialogModule } from './components/dialog/dialog.module';
import { MainModule } from './components/main/main.module';



registerLocaleData(localeDECH);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    DialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en'},
    {provide: ErrorHandler, useClass: AppException}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
