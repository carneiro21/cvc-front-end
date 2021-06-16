import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service for informing about resizing of layout
 */
 @Injectable({
  providedIn: 'root'
})
export class ResizeService {

  resizeInformer$ = new Subject();

  constructor() {
  }

}
