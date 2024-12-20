import {Inject, Injectable, Optional} from '@angular/core';
import {findLastIndex} from '../../utils/array.utils';
import {WINNER_STRATEGY} from '../winner/winner.token';
import {WinnerStrategy} from '../winner/winner-strategy';
import {GridType} from '../../domain/types';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _grid!: GridType;

  // @TODO need to make these configurable
  private readonly _cols: number = 6;
  private readonly _rows: number = 7;
  private readonly _slots: number = this._cols * this._rows;

  private _filledSlots = 0;

  constructor(
    @Optional() @Inject(WINNER_STRATEGY) private winnerStrategyChain?: WinnerStrategy[]
  ) {
    this._grid = this.initGrid();
  }

  dropChip(column: number, playerId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isValidDrop(column)) {
        const row = this.findEmptyRowIndex(column);
        this._grid[row][column] = playerId;
        this._filledSlots++;
        resolve();
      } else reject();
    });
  }

  isGridFull(): boolean {
    return this._filledSlots >= this._slots;
  }

  isWinner(playerId: string): boolean {
    return this.winnerStrategyChain
      ? this.winnerStrategyChain.some((strategy) => strategy.isWinner(this._grid, playerId))
      : false;
  }

  reset(): GridType {
    return (this._grid = this.initGrid());
  }

  get grid(): GridType {
    return this._grid;
  }

  /**
   * fill grid with null which means the slots are "empty"
   */
  private initGrid(): GridType {
    return Array(this._rows).fill(0).map(() => Array(this._cols).fill(null));
  }

  private isValidDrop(column: number): boolean {
    return (column >= 0 && column < this._cols) && (this._grid?.[0]?.[column] == null);
  }

  private findEmptyRowIndex(columnIndex: number): number {
    const rowIndex = findLastIndex(this._grid, (cols) => cols[columnIndex] == null);

    if (rowIndex < 0) throw new Error(`Column ${columnIndex + 1} is full!`);
    else return rowIndex;
  }
}
