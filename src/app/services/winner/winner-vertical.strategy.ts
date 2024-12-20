import {WinnerStrategy} from './winner.strategy';
import {Injectable} from '@angular/core';
import {Player} from '../../domain/player';
import {Board} from '../../domain/board';

@Injectable({
  providedIn: 'root'
})
export class WinnerVerticalStrategy extends WinnerStrategy {
  isWinner(board: Board, player: Player): boolean {
    for (let row: number = 0; row < board.rowCount - 3; row++) {
      for (let col = 0; col < board.columnCount; col++) {
        if (player === board.readSlot(row, col)
          && player === board.readSlot(row + 1, col)
          && player === board.readSlot(row + 2, col)
          && player === board.readSlot(row + 3, col))
          return true;
      }
    }
    return false;
  }
}
