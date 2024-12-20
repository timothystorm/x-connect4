import {WinnerStrategy} from './winner-strategy';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinnerVerticalService extends WinnerStrategy {
  isWinner(grid: any[][], playerId: any): boolean {

    for(let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 3; row++){
        if (playerId === grid[row][col]
          && playerId === grid[row + 1][col]
          && playerId === grid[row + 2][col]
          && playerId === grid[row + 3][col])
          return true;
      }
    }
    return false;
  }
}
