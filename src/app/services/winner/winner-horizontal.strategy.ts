import {WinnerStrategy} from './winner.strategy';
import {Injectable} from '@angular/core';
import {Board} from '../../domain/board';
import {Player} from '../../domain/player';

@Injectable({
  providedIn: 'root'
})
export class WinnerHorizontalStrategy extends WinnerStrategy {
  isWinner(board: Board, player: Player): boolean {
    for (let row: number = 0; row < board.rowCount; row++) {
      for (let col = 0; col < board.columnCount - 3; col++){
        if (player === board.readSlot(row, col)
          && player === board.readSlot(row, col + 1)
          && player === board.readSlot(row, col + 2)
          && player ===board.readSlot(row, col + 3))
          return true;
      }
    }
    return false;
  }
}
