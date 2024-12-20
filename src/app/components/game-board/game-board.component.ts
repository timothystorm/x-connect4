import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {NgClass, NgForOf} from '@angular/common';
import {GameService} from '../../services/game/game.service';
import {GridType} from '../../domain/types';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent implements OnDestroy {
  private readonly _done = new Subject<void>();
  private user: 'x' | 'y' = 'x';

  grid: GridType;

  constructor(
    private gameService: GameService
  ) {
    this.grid = this.gameService.grid;
  }

  ngOnDestroy(): void {
    this._done.next(void 0);
    this._done.complete();
  }

  dropChip(columnIndex: number): void {
    this.gameService.dropChip(columnIndex, this.user)
      .then(() => {
        if (this.gameService.isWinner(this.user)) console.log('winner');
        else if(this.gameService.isGridFull()) console.log('... grid full, nobody won');
        else this.user = (this.user === 'x') ? 'y' : 'x';
      })
      .catch(() => alert('column is full, please pick another'));
  }

  reset(): void {
    this.grid = this.gameService.reset();
    this.user = 'x';
  }
}
