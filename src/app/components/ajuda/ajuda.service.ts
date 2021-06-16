import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Ajuda } from './ajuda.model';
import { AJUDAS } from './ajudas';

@Injectable({
  providedIn: 'root'
})
export class AjudaService {

  constructor() { }

  getAjuda(codigo: number): Observable<Ajuda> {
    const ajuda = AJUDAS.find((c) => c.codigo === codigo) as Ajuda;
    return of(ajuda);
  }

}
