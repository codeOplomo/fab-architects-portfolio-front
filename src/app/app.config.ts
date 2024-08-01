// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // Correct import
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // Ensure RouterModule is provided correctly
  ]
};
