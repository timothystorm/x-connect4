import {WinnerStrategy} from './winner-strategy';
import {Injectable} from '@angular/core';
import {GridType} from '../../domain/types';

@Injectable({
  providedIn: 'root'
})
export class WinnerHorizontalService extends WinnerStrategy {
  isWinner(grid: GridType, playerId: string): boolean {
    for (const row of grid) {
      for (let col = 0; col < row.length - 3; col++){
        if (playerId === row[col]
          && playerId === row[col + 1]
          && playerId === row[col + 2]
          && playerId === row[col + 3])
          return true;
      }
    }
    return false;
  }
}
