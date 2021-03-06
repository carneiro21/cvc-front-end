import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service for informing menu nodes about closing
 */
 @Injectable({
  providedIn: 'root'
})
export class CloseService {

  closeInformer$ = new Subject<number>();

  constructor() {
  }

  inform(menuLevel: number) {
    this.closeInformer$.next(menuLevel);
  }

}
