import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleTransferComponent } from './schedule-transfer/schedule-transfer.component';
import { SearchSchedulesComponent } from './search-schedules/search-schedules.component';

export const SCHEDULE_ROUTES: Routes = [
  {path: '', redirectTo: 'search-schedules', pathMatch: 'full'},
  {path: 'schedule-transfer', component: ScheduleTransferComponent, data: {breadcrumb: 'Schedule Transfer'} },
  {path: 'search-schedules', component: SearchSchedulesComponent, data: {breadcrumb: 'Search Schedules'} },
  {path: 'schedule-transfer/:id', component: ScheduleTransferComponent, data: {breadcrumb: 'Edit Search Schedules'} }
];

@NgModule({
  imports: [
    RouterModule.forChild(SCHEDULE_ROUTES)
  ]
})
export class ScheduleRoutesModule {
}
