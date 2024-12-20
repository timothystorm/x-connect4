import {InjectionToken} from '@angular/core';
import {WinnerStrategy} from './winner.strategy';

export const WINNER_STRATEGY = new InjectionToken<WinnerStrategy>("Winner Strategy");
