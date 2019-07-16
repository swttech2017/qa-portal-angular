import {ModuleWithProviders, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QaCommonModule} from '../../../qa-common/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent
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
export class ApartmentMngmtSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
