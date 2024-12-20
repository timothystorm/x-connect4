import {WinnerStrategy} from './winner.strategy';
import {Injectable} from '@angular/core';
import {Player} from '../../domain/player';
import {Board} from '../../domain/board';

@Injectable({
  providedIn: 'root'
})
export class WinnerAscendingDiagonalStrategy extends WinnerStrategy {
  isWinner(board: Board, player: Player): boolean {
    for (let row: number = 3; row < board.rowCount; row++) {
      for (let col = 0; col < board.columnCount - 3; col++) {
        if (player === board.readSlot(row, col)
          && player === board.readSlot(row - 1, col + 1)
          && player === board.readSlot(row - 2, col + 2)
          && player === board.readSlot(row - 3, col + 3))
          return true;
      }
    }
    return false;
  }
}
