import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DialogService } from '../../dialog/dialog.service';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-transfer',
  templateUrl: './schedule-transfer.component.html',
  styleUrls: ['./schedule-transfer.component.scss']
})
export class ScheduleTransferComponent implements OnInit, OnDestroy {

  private financialScheduleDTO;

  title = 'Schedule Transfer';

  inscricao: Subscription;

  form = this.fb.group({
    id: [null],
    originAccount: [null, [Validators.required]],
    destinationAccount: [null, [Validators.required]],
    transferValue: [null, [Validators.required]],
    transferData: [new Date(),  [Validators.required]],
    schedulingDate: [null, [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private dialogService: DialogService,
    private scheduleService: ScheduleService,
    private router: Router,
    private route: ActivatedRoute) {
      
     }

  ngOnInit(): void {
    const id = this.route.params['id'];
    this.inscricao = this.route.params.subscribe(params => {
      const id = params['id'];
      if (!!id) {
        this.findScheduleTransfer(id);
      }
    });

  }

  findScheduleTransfer(id: number): void {
    this.scheduleService.findScheduleTransfer(id)
      .subscribe(response => {
        this.financialScheduleDTO = response;
        this.title = 'Edit Schedule Transfer'
        this.form.get('id').setValue(this.financialScheduleDTO.id);
        this.form.get('originAccount').setValue(this.financialScheduleDTO.destinationAccount);
        this.form.get('destinationAccount').setValue(this.financialScheduleDTO.destinationAccount);
        this.form.get('transferValue').setValue(this.financialScheduleDTO.transferValue);
        this.form.get('transferData').setValue(this.financialScheduleDTO.transferData);
        this.form.get('schedulingDate').setValue(this.financialScheduleDTO.schedulingDate);
        
      });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onSubmit(): void {
    if (this.financialScheduleDTO) {
        this.dialogService.confirm('Confirm the edition of this schedule?', 'Warning!', ()=> {this.createScheduleTransfer()}, ()=> {});
    }else {
      this.dialogService.confirm('Confirm the creation of this schedule?', 'Warning!', ()=> {this.createScheduleTransfer()}, ()=> {});
    }
  }

  createScheduleTransfer(): void {
    this.scheduleService.createScheduleTransfer(this.form.value)
    .subscribe(response => {
        if (this.financialScheduleDTO) {
          this.dialogService.alert('Financial schedule edited successfully.', 'Success!');
        }else {
          this.dialogService.alert('Financial schedule created successfully.', 'Success!');
        }
        this.router.navigate(['main/schedule/search-schedules']);
    });
  }

  clearForm(): void {
    this.form.reset();
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

  get transferData() {
    return this.form.get('transferData');
  }

  get schedulingDate() {
    return this.form.get('schedulingDate');
  }

}
