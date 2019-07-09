import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {MenuService} from '../_services/menu-service';
import {Subscription} from 'rxjs';
import {ApplicationSelectionService} from '../_services/application-selection.service';
import {Application} from '../_models/application';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.css']
})
export class PortalHeaderComponent implements OnInit, OnDestroy {
  portalApplications: any[] = [];

  navMenuSubscription: Subscription;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private menuService: MenuService,
              private applicationSelectionService: ApplicationSelectionService,
              private router: Router,
              private keycloak: KeycloakService) {
  }

  ngOnInit() {
    this.navMenuSubscription = this.menuService.getPortalMenu()
      .subscribe((response) => {
          this.portalApplications = response;
          // The first application will be the Home application (based on display order), and it will have one application route
          const initialApp = this.portalApplications[0].applications[0];
          this.applicationSelectionService.setSelectedApplication(initialApp);
          this.router.navigate([initialApp.url]);
          console.log('Should have navigated to home page ' + initialApp.url);
        }
      );
  }

  ngOnDestroy(): void {
    this.navMenuSubscription.unsubscribe();
  }

  setApplication(appl: Application) {
    this.applicationSelectionService.setSelectedApplication(appl);
  }

  logout() {
    this.keycloak.logout();
  }
}
