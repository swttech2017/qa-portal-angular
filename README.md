# QA Portal - Angular

## Overview

The projects in this repository provide the UI components of the QA Portal application. At the top level is an angular workspace containing each of the applications that are part of the QA Portal. These applications are all configured from the angular.json file defined by the workspace

The portal applications are located in the projects folder of the workspace. Any new applications to be added to the portal should be added using the following command from the root folder of the workspace

ng generate application app-name –-routing 

This will generate the "app-name" application in the projects directory and update the angular.json file with its configuratiom

The projects directory contains the following applications

**portal-core** - The core application of the Portal. This manages the main navigation toolbar, sidebar menu, error handling and security 

**qa-common** - For common components reused across multiple portal applications. Does not have routing configured

**qa-error-app** - Provides error components and their routing. These error routes will be initiated from the central error handler service in the portal-core application

**portal-home** - Landing page when a user logs into the portal. 

**trainee-reflection-app** - Application for creating, submitting and viewing Trainee Self reflection forms

The other applications in the projects folder currently have no functionality, but have been added to demonstrate navigation between the various portal applications and the configuration to include an application in the portal.


## Developer Guide

The following provides a more detailed explanation of each of the portal projects, how they are structured, how to add a new application to the portal, and the associated development tasks.

After a user logs into

### portal-core


#### Security

Security is managed by Keycloak with the application integrated with the Keycloak Identity and Access Management Provider through an angular-keycloak adapter. The portal-core app.module.ts has an APP_INITIALIZER provider that triggers the initializer function in app-init.ts. This initiates the keycloak authentication. If the user is not authenticated, then the application is redirected to the keycloak provider and a log in page for the QA Portal is presented to the user.

Once the user has entered their username and password, they are authenticated by the keycloak provider, and if successful a JWT is issued. Keycloak then redirects the application to the url originally specified by the user prior to the keyloak redirection. 

The angular-keycloak adapter by default provides an Http interceptor that will add the JWT as an Authorization header to any Http requests sent from the angular application. This behaviour can be disabled for specific urls if necessary.


#### Portal Navigation

The portal-core project manages navigation between applications within the portal and also manages which applications are available in the portal for a user.

The portal-header components top navigation toolbar presents the user with the applications (grouped by department) available to the user based on the users roles. These roles were determined during keycloak authentication. The list of available applications is retrieved by a call to the core-api applications service.

Once the navigation toolbar has been loaded, the user navigates between applications by selecting an application from the menu. There are 2 events initiated when selecting an application from the menu

a) The side navigation menu items will update to contain the menu items for this selected application. This is triggered in app.component.ts, through a subscription to router navigation events. Whenever a route changes, the url of the new route is passed to the subscriber and triggers an update to the contents of the side navigation pane.

b) The main content pane will display the home page of the selected application. This is default angular behaviour based on the routerLink anchor in the portal-header.component.html file
 

#### Application Navigation

Navigation within an application is controlled from links within the application or from the menu items on the side navigation pane. 

Each application has an app-routing.module.ts file to define it's navigation routes.
 
The portal-core app-routing.module.ts loads the routing modules of each of the portal projects and all routing is controlled from the portal-core project. The intention is to lazy load these routing modules but at the moment they are directly loaded as there appears to be a problem with lazy loading from other applications in Angular 8. 


#### Error Handling

The portal-core application manages error handling through the QaErrorHandlingService (qa-error-handling.service.ts). This can be referenced from any of the portal applications. For an example of using the error handler service, see self-reflection-form.component.ts

The error handling service will redirect any severe errors to an error page advising the user that there is a serious issue with the application and if the issue continues to contact support.

Any application errors that can be resolved by the user will be displayed using the Toastr service.

### qa-common

### qa-error-app

### portal-home

### trainee-reflection-app

### Adding a new application to the Portal

### Developing Portal Components and Services



## Build and Running Portal

### Pre-Requisites

a) A local keycloak instance and Postgres DB has been installed and configured. See instructions in 
https://github.com/swttech2017/qa-portal-infra/blob/master/README.md

b) An instance of core-api services are running locally. See instructions in
https://github.com/swttech2017/qa-portal-services/blob/master/README.md


### Build and Run QA Portal

a) Clone the qa-portal-angular repo using command

git clone https://github.com/swttech2017/qa-portal-angular.git

b) From the base project folder install dependencies using npm

npm install

c) From the base project folder start the angular application

npm start
