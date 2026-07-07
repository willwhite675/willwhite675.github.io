import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainPage } from './app/Main-Page/main-page';

bootstrapApplication(MainPage, appConfig).catch((err) => console.error(err));
