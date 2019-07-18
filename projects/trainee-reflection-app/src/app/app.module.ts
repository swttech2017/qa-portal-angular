import {ModuleWithProviders, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SelfReflectionFormComponent} from './self-reflection-form/self-reflection-form.component';
import {QaCommonModule} from '../../../qa-common/src/app/app.module';
import {RatedQuestionsService} from './self-reflection-form/services/rated-questions.service';
import { SelfReflectionHistoryComponent } from './self-reflection-history/self-reflection-history.component';
import {SelfReflectionHistoryService} from './self-reflection-history/services/self-reflection-history.service';
import {SelfReflectionFormService} from './self-reflection-form/services/self-reflection-form.service';

@NgModule({
  declarations: [
    AppComponent,
    SelfReflectionFormComponent,
    SelfReflectionHistoryComponent
  ],
  imports: [
    QaCommonModule,
    AppRoutingModule
  ],
  providers: [RatedQuestionsService, SelfReflectionHistoryService, SelfReflectionFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class TraineeReflectionSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
