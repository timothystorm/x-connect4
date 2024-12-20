import {WinnerStrategy} from './winner-strategy';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WinnerHorizontalService extends WinnerStrategy {
  isWinner(grid: any[][], playerId: any): boolean {
    for(let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length - 3; col++){
        if (playerId === grid[row][col]
          && playerId === grid[row][col + 1]
          && playerId === grid[row][col + 2]
          && playerId === grid[row][col + 3])
          return true;
      }
    }
    return false;
  }
}
