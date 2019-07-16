import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {MenuService} from '../_common/services/menu-service';
import {Subscription} from 'rxjs';
import {ApplicationSelectionService} from '../_common/services/application-selection.service';
import {Application} from '../_common/models/application';
import {KeycloakService} from 'keycloak-angular';
import {Router} from '@angular/router';

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
              private keycloak: KeycloakService,
              private router: Router) {
  }

  ngOnInit() {
    this.navMenuSubscription = this.menuService.getPortalMenu()
      .subscribe((response) => {
          this.portalApplications = response;
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
