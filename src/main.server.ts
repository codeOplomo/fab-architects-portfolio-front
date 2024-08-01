import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { MainLayoutComponent } from './app/shared/layout/main-layout/main-layout.component';

const bootstrap = () => bootstrapApplication(MainLayoutComponent, config);

export default bootstrap;
