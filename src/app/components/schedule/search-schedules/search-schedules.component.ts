import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { DialogService } from '../../dialog/dialog.service';
import { FilterFinancialScheduleDTO, FinancialScheduleDTO } from '../schedule.model';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-search-schedules',
  templateUrl: './search-schedules.component.html',
  styleUrls: ['./search-schedules.component.scss']
})
export class SearchSchedulesComponent implements OnInit {

  listFinancialScheduleDTO$ = new BehaviorSubject<Array<FinancialScheduleDTO>>(null);

  filter: FilterFinancialScheduleDTO = { } as FilterFinancialScheduleDTO;
  
  form = this.fb.group({
    originAccount: [null],
    destinationAccount: [null],
    transferValue: [null],
    transferDataInit: [null],
    transferDataFinal: [null],
    schedulingDateInit: [null],
    schedulingDateFinal: [null],
  });

  constructor(private fb: FormBuilder,
    private dialogService: DialogService,
    private scheduleService: ScheduleService,
    private router: Router) {
      
     }

  ngOnInit(): void {
    this.listFinancialSchedule();
  }

  clearForm(): void {
    this.form.reset();
  }

  listFinancialSchedule() {
    this.scheduleService.filterScheduleTransfer(this.filter)
      .subscribe(reponse => {
        if (reponse && reponse.list &&  reponse.list.length >0){
          this.listFinancialScheduleDTO$.next(reponse.list);
        }else{
          this.listFinancialScheduleDTO$.next(null);
        }
        if (!this.filter.totalrecords){
          this.filter.totalrecords = reponse.records;
        }
        if (!this.filter.pageSize){
          this.filter.pageSize = reponse.recordsPage
        }
        if (!this.filter.pageNumber){
          this.filter.pageNumber = reponse.page;
        }
      }, error => {
        this.listFinancialScheduleDTO$.next(null);
      });
  }

  onPagination(event: PageEvent): void {
    this.filter.pageNumber = event.pageIndex + 1;
    this.filter.pageSize = event.pageSize;
    this.listFinancialSchedule();
  }

  onSort(sort: Sort): void {
    this.filter.fieldOrder = sort.active;
    this.filter.orderingDirection = sort.direction;
    this.listFinancialSchedule();
  }

  onSubmit(): void {
    this.filter =  Object.assign({}, this.form.value);
    this.filter.transferDataInit = this._transformData(this.form.value.transferDataInit);
    this.filter.transferDataFinal = this._transformData(this.form.value.transferDataFinal);
    this.filter.schedulingDateInit = this._transformData(this.form.value.schedulingDateInit);
    this.filter.schedulingDateFinal = this._transformData(this.form.value.schedulingDateFinal);
    this.filter.pageNumber = 0;
    this.filter.pageSize = 10;
    this.listFinancialSchedule(); 
  }

  deleteFinancialSchedule(id: number): void {
    this.scheduleService.deleteScheduleTransfer(id)
      .subscribe(response =>{
        this.dialogService.alert('Financial schedule deleted successfully.', 'Success!');
        this.listFinancialSchedule();
      });
  }

  editFinancialSchedule(id: number) {
    this.router.navigate(['main/schedule/schedule-transfer/', id]);
  }

  showModalDeleteFinancialSchedule(id: number) {
    this.dialogService.confirm('Confirm the deletion of this schedule?', 'Warning!', ()=> {this.deleteFinancialSchedule(id)}, ()=> {})  
  }
  
  private _transformData(dataStr: string): string {
    let dataFormatada = '';
    console.log('dataStr',dataStr);
    if (dataStr && dataStr !== '') {
      const date = new Date(dataStr);
      dataFormatada = (new Intl.DateTimeFormat('en-us')).format(date);
    }

    return dataFormatada;
  }


  get originAccount() {
    return this.form.get('originAccount');
  }

  get destinationAccount() {
    return this.form.get('destinationAccount');
  }

  get transferValue() {
    return this.form.get('transferValue');
  }

  get transferDataInit() {
    return this.form.get('transferDataInit');
  }

  get transferDataFinal() {
    return this.form.get('transferDataFinal');
  }

  get schedulingDateInit() {
    return this.form.get('schedulingDateInit');
  }

  get schedulingDateFinal() {
    return this.form.get('schedulingDateFinal');
  }

}
