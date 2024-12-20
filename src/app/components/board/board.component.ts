import {Component, Inject, Optional} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {Board} from '../../domain/board';
import {Player} from '../../domain/player';
import {WINNER_STRATEGY} from '../../services/winner/winner-strategy.token';
import {WinnerHorizontalStrategy} from '../../services/winner/winner-horizontal.strategy';
import {WinnerVerticalStrategy} from '../../services/winner/winner-vertical.strategy';
import {WinnerStrategy} from '../../services/winner/winner.strategy';
import {WinnerDescendingDiagonalStrategy} from '../../services/winner/winner-descending-diagonal.strategy';
import {WinnerAscendingDiagonalStrategy} from '../../services/winner/winner-ascending-diagonal.strategy';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  providers: [
    {provide: WINNER_STRATEGY, useClass: WinnerHorizontalStrategy, multi: true},
    {provide: WINNER_STRATEGY, useClass: WinnerVerticalStrategy, multi: true},
    {provide: WINNER_STRATEGY, useClass: WinnerAscendingDiagonalStrategy, multi: true},
    {provide: WINNER_STRATEGY, useClass: WinnerDescendingDiagonalStrategy, multi: true}
  ]
})
export class BoardComponent {
  board: Board;
  currentPlayer: Player;
  plays: number = 0;

  private players: Player[] = [{id: 'x', name: 'player 1'}, {id: 'y', name: 'player 2'}]

  constructor(
    @Optional() @Inject(WINNER_STRATEGY) private winnerStrategyChain?: WinnerStrategy[],
  ) {
    this.board = new Board(6, 7);
    this.currentPlayer = this.players[0];
  }

  dropChip(column: number): void {
    this.board.drop(column, this.currentPlayer)
      .then(() => {
        if (this.winnerStrategyChain?.some(s => s.isWinner(this.board, this.currentPlayer))) {
          console.log(`winner - ${this.currentPlayer.name}`)
        }
      })
      .then(() => this.currentPlayer = this.players[(++this.plays) % this.players.length]);
  }
}
