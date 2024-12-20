import {Injectable} from '@angular/core';
import {findLastIndex} from '../../utils/array.utils';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _grid!: any[][];

  // @TODO need to make these configurable
  private readonly _cols: number = 6;
  private readonly _rows: number = 7;
  private readonly _slots: number = this._cols * this._rows;

  constructor() {
    this._grid = this.initGrid();
  }

  dropChip(column: number, playerId: any): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isValidDrop(column)) {
        const row = this.findEmptyRowIndex(column);
        this._grid[row][column] = playerId;
        resolve();
      } else reject();
    });
  }

  get grid(): number[][] {
    return this._grid;
  }

  reset(): any[][] {
    return (this._grid = this.initGrid());
  }

  /**
   * fill grid with null which means the slots are "empty"
   */
  private initGrid(): any[][] {
    return Array(this._rows).fill(0).map(_ => Array(this._cols).fill(null));
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
