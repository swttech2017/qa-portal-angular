import {ModuleWithProviders, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScheduleHomeComponent} from './schedule-home/schedule-home.component';
import {QaCommonModule} from '../../../qa-common/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleHomeComponent
  ],
  imports: [
    QaCommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class TrainerSchedulingSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
