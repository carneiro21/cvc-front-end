import { QueryPageDTO } from './../../app..model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { FilterFinancialScheduleDTO, FinancialScheduleDTO } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  private URL_BASE = `${environment.url}/api-cvc/schedule-transfer`;

  createScheduleTransfer(financialScheduleDTO: FinancialScheduleDTO): Observable<any> {
    const path: string = this.URL_BASE + '/create';
    return this.http.post<any>(path, financialScheduleDTO);
  }

  findScheduleTransfer(id: number): Observable<FinancialScheduleDTO> {
    const path: string = `${this.URL_BASE}/find/${id}`
    return this.http.get<FinancialScheduleDTO>(path);
  }

  deleteScheduleTransfer(id: number): Observable<any> {
    const path: string = `${this.URL_BASE}/delete/${id}`
    return this.http.delete<any>(path);
  }

  updateScheduleTransfer(financialScheduleDTO: FinancialScheduleDTO): Observable<any> {
    const path: string = this.URL_BASE + '/update';
    return this.http.put<any>(path, financialScheduleDTO);
  }

  filterScheduleTransfer(filtro: FilterFinancialScheduleDTO): Observable<QueryPageDTO>{

    let order = '';
    if (filtro.fieldOrder && filtro.orderingDirection){
      order =  filtro.fieldOrder + ' ' + filtro.orderingDirection;
    }

    const params = {
      originAccount: filtro.originAccount === '' ? null : filtro.originAccount,
      destinationAccount: filtro.destinationAccount === '' ? null : filtro.destinationAccount,
      transferDataInit: filtro.transferDataInit === '' ? null : filtro.transferDataInit,
      transferDataFinal: filtro.transferDataFinal === '' ? null : filtro.transferDataFinal,
      schedulingDateInit: filtro.schedulingDateInit === '' ? null : filtro.schedulingDateInit,
      schedulingDateFinal: filtro.schedulingDateFinal === '' ? null : filtro.schedulingDateFinal,
      transferValue: filtro.transferValue,
      pagina: filtro.pageNumber ? filtro.pageNumber.toString() : '',
      orderBy: order
    };

    Object.keys(params).forEach(key => !params[key] ? delete params[key] : {});
    return this.http.get<QueryPageDTO>(this.URL_BASE + `/filter`, { params: new HttpParams({ fromObject: params }) });
  }

}
