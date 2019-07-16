import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleHomeComponent} from './schedule-home/schedule-home.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'trainer/schedule',
    component: AppComponent,
    children: [
      {
        path: 'home',
        component: ScheduleHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
