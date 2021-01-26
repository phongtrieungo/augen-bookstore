# Running project instruction

## Prerequistition

- NodeJS v12.5
- NPM v6.9.0
- PHP v8
- Composer

## Frontend Application

1. Installing Angular CLI - `npm i -g @angular/cli`.

2. Installing the packages - `npm i`

3. Starting the web client application - `ng serve`

Application design

The application is structured based on standard structure of an normal Angular application so that it can be easy to follow for every developer.

The state management is used to ensure the consistency of data management as well as implementation flow.

The UI pattern smart and presentational component will be used to ensure the seperation of concern when smart components will be responsible for handling business logic while presentational components will display data only. They also have OnPush change detection strategy for improving performance.

## Backend Application

1. Navigating to folder serve

2. Installing package - `composer install`

3. Starting the backend application - `php artisan serve`

## Time summary

- Preparation: 2 hours
- Coding: 8 hours
- Styling: 1 hour
- Building and test: 1 hour
