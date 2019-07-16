import {Component, OnInit} from '@angular/core';
import {Event, NavigationStart, Router} from '@angular/router';
import {MenuService} from './_common/services/menu-service';
import {Subscription} from 'rxjs';
import {ApplicationSelectionService} from './_common/services/application-selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  portalApplications: any[] = [];

  title = 'portal-core';

  currentUrl: string;

  navMenuSubscription: Subscription;

  constructor(private menuService: MenuService,
              private router: Router,
              private applicationSelectionService: ApplicationSelectionService) {

    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = event.url;
        this.setSelectedApplication(event.url);
      }
    });
  }

  ngOnInit() {
    console.log('In ngOnInit');
    this.navMenuSubscription = this.menuService.getPortalMenu()
      .subscribe((response) => {
          console.log('Got portal applications from service');
          this.portalApplications = response;
          console.log('Portal Applications ' + this.portalApplications);
          this.setSelectedApplication(this.currentUrl);
        }
      );
  }

  private setSelectedApplication(currUrl: string): void {
    console.log('Setting selected application for curr url ' + currUrl);
    let appSelected = false;
    this.portalApplications.forEach((pa) => {
      pa.applications.forEach(a => {
        console.log('App url ' + a.url);
        if (currUrl.startsWith(a.url)) {
          console.log('Current App url ' + a.url);
          this.applicationSelectionService.setSelectedApplication(a);
          appSelected = true;
        }
      });

      // Set the selected application to the home application
      if (!appSelected && currUrl.startsWith('/qa')) {
        this.applicationSelectionService.setSelectedApplication(this.portalApplications[0].applications[0]);
      }
    });
  }
}
