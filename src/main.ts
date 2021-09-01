import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { init as initApm } from '@elastic/apm-rum';

const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'cepaFront',

  // // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200'

  // // Set service version (required for sourcemap feature)
  // serviceVersion: ''
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

apm.setInitialPageLoadName('CEPAFRONT main');
