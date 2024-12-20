import {Injectable} from '@angular/core';
import {GridType} from '../../domain/types';

@Injectable()
export abstract class WinnerStrategy {
  abstract isWinner(grid: GridType, playerId: string): boolean;
}
