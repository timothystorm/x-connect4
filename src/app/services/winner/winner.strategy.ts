import {Injectable} from '@angular/core';
import {Player} from '../../domain/player';
import {Board} from '../../domain/board';

/**
 * Determines if the player has won the board.
 *
 * @note To utilize injection, Angular requires an Abstract parent and not an interface
 */
@Injectable()
export abstract class WinnerStrategy {
  abstract isWinner(board: Board, player: Player): boolean;
}
