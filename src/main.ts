import 'zone.js'
import 'core-js/es7/reflect'
import singleSpaAngular from 'single-spa-angular'
import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default singleSpaAngular({
  domElementGetter,
  mainModule: AppModule,
  angularPlatform: platformBrowserDynamic(),
  template: '<app-root />',
  Router,
  ApplicationRef,
})

function domElementGetter() {
  return document.getElementById('hi')
}
