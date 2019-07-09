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
    path: 'home',
    loadChildren: () => PortalHomeSharedModule
  },
  {
    path: 'feedback',
    loadChildren: () => TraineeFeedbackSharedModule
  },
  {
    path: 'reflection',
    loadChildren: () => TraineeReflectionSharedModule
  },
  {
    path: 'schedule',
    loadChildren: () => TrainerSchedulingSharedModule
  },
  {
    path: 'apartment',
    loadChildren: () => ApartmentMngmtSharedModule
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
