import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {WINNER_STRATEGY} from './services/winner/winner.token';
import {WinnerHorizontalService} from './services/winner/winner-horizontal.service';
import {WinnerVerticalService} from './services/winner/winner-vertical.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    { provide: WINNER_STRATEGY, useClass: WinnerHorizontalService, multi: true },
    { provide: WINNER_STRATEGY, useClass: WinnerVerticalService, multi: true }
  ]
};
