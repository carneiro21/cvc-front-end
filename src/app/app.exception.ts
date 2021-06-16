import { Injectable, Injector, ErrorHandler } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DialogService } from './components/dialog/dialog.service';

/**
 * Classe responsável por interceptar as exceções ocorrida na aplicação.
 */
 @Injectable({
    providedIn: 'root'
  })
export class AppException implements ErrorHandler {

  constructor(private injector: Injector) { }

  /**
   * Manipula o erro interceptado e apresenta no console do nevegador caso o ambiente não seja de produção.
   * @param error Erro interceptado para os devidos tratamentos
   */
  public handleError(error: any): void {
    const message = (error instanceof Error) ? error.message : error.toString();
    if (message.indexOf('ExpressionChangedAfterItHasBeenCheckedError') !== -1) { // erro gerado apenas no modo debugavel
      return;
    }
    const exceptionInfo = ['EXCEPTION: ' + message];
    if (error instanceof Error) {
      exceptionInfo[exceptionInfo.length] = error.stack;
    }
    console.error(exceptionInfo);
    if (!environment.production) {
      this.injector.get(DialogService).alert(message, 'Falha');
    }
  }
}
