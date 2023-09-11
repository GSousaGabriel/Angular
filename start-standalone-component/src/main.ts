import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { MAIN_ROUTES } from './app/main-routers';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      MAIN_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    )]
})
