import {Injectable} from '@angular/core';

@Injectable()
export abstract class WinnerStrategy {
  abstract isWinner(grid: any[][], playerId: any): boolean;
}
