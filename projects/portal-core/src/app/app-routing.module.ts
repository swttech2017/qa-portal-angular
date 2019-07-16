import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortalHomeSharedModule} from '../../../portal-home/src/app/app.module';
import {TraineeFeedbackSharedModule} from '../../../trainee-feedback-app/src/app/app.module';
import {TraineeReflectionSharedModule} from '../../../trainee-reflection-app/src/app/app.module';
import {TrainerSchedulingSharedModule} from '../../../trainer-scheduling-app/src/app/app.module';
import {ApartmentMngmtSharedModule} from '../../../apartment-mngmt-app/src/app/app.module';
import {ErrorViewComponent} from './error-view/error-view.component';

const routes: Routes = [
  {
    path: 'qa/portal/home',
    loadChildren: () => PortalHomeSharedModule
  },
  {
    path: 'qa/portal/training',
    loadChildren: () => TraineeFeedbackSharedModule
  },
  {
    path: 'qa/portal/training',
    loadChildren: () => TraineeReflectionSharedModule
  },
  {
    path: 'qa/portal/training',
    loadChildren: () => TrainerSchedulingSharedModule
  },
  {
    path: 'qa/portal/hr',
    loadChildren: () => ApartmentMngmtSharedModule
  },
  {
    path: 'qa',
    children: [
      {path: '**', redirectTo: '/qa/portal/home/view'}
    ]
  },
  {
    path: '', redirectTo: '/qa/portal/home/view', pathMatch: 'prefix'
  },
  {
    path: '**',
    component: ErrorViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PortalHomeSharedModule.forRoot(),
    ApartmentMngmtSharedModule.forRoot(),
    TraineeFeedbackSharedModule.forRoot(),
    TraineeReflectionSharedModule.forRoot(),
    TrainerSchedulingSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
