import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { MainPage } from './app/Main-Page/main-page';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(MainPage, config, context);

export default bootstrap;
