import {Component, Inject, Input, Optional} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
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
    NgClass,
    NgIf
  ],
  exportAs: 'BoardComponent',
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
  @Input() board?: Board;
  @Input() playerOne?: Player;
  @Input() playerTwo?: Player;
  @Input() currentPlayer?: Player;

  constructor(
    @Optional() @Inject(WINNER_STRATEGY) private winnerStrategyChain?: WinnerStrategy[],
  ) {
  }

  dropChip(column: number): void {
    if (this.currentPlayer) {
      console.log('dropped')
      this.board?.drop(column, this.currentPlayer).then(() => {
        if (this.winnerStrategyChain?.some(s => s.isWinner(this.board!, this.currentPlayer))) {
          console.log(`winner - ${this.currentPlayer?.name}`)
        }

        this.currentPlayer = this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne
      }).catch(() => {
        console.warn('illegal move')
      });
    }
  }
}
