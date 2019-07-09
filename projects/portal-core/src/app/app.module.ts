import {NgModule, APP_INITIALIZER} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PortalHeaderComponent} from './portal-header/portal-header.component';
import {QaCommonModule} from '../../../qa-common/src/app/app.module';
import {MenuService} from './_services/menu-service';
import {PortalSideMenuComponent} from './portal-side-menu/portal-side-menu.component';
import {PortalSideMenuContentComponent} from './portal-side-menu/portal-side-menu-content/portal-side-menu-content.component';
import {ApplicationSelectionService} from './_services/application-selection.service';
import {PortalFooterComponent} from './portal-footer/portal-footer.component';
import {ErrorViewComponent} from './error-view/error-view.component';
import {PortalHomeSharedModule} from '../../../portal-home/src/app/app.module';
import {ApartmentMngmtSharedModule} from '../../../apartment-mngmt-app/src/app/app.module';
import {TraineeFeedbackSharedModule} from '../../../trainee-feedback-app/src/app/app.module';
import {TraineeReflectionSharedModule} from '../../../trainee-reflection-app/src/app/app.module';
import {TrainerSchedulingSharedModule} from '../../../trainer-scheduling-app/src/app/app.module';
import {BrowserModule} from '@angular/platform-browser';
import {KeycloakService, KeycloakAngularModule} from 'keycloak-angular';
import {initializer} from '../../../../app-init';

@NgModule({
  declarations: [
    AppComponent,
    PortalHeaderComponent,
    PortalSideMenuComponent,
    PortalSideMenuContentComponent,
    PortalFooterComponent,
    ErrorViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QaCommonModule,
    PortalHomeSharedModule.forRoot(),
    ApartmentMngmtSharedModule.forRoot(),
    TraineeFeedbackSharedModule.forRoot(),
    TraineeReflectionSharedModule.forRoot(),
    TrainerSchedulingSharedModule.forRoot(),
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    MenuService,
    ApplicationSelectionService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
