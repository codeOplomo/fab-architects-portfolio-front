import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainLayoutComponent } from './app/shared/layout/main-layout/main-layout.component';

bootstrapApplication(MainLayoutComponent, appConfig)
  .catch((err) => console.error(err));
