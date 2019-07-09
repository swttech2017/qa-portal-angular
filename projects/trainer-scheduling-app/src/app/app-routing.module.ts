import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleHomeComponent} from './schedule-home/schedule-home.component';

const routes: Routes = [
  {
    path: 'qa/portal/training/trainer/schedule/home',
    component: ScheduleHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
