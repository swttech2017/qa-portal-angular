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

The following provides a more detailed explanation of each of the "main" portal projects, how they are structured, how to add a new application to the portal, and the associated developement tasks.

### portal-core

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
