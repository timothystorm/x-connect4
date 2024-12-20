import {Player} from './player';
import {findLastIndex} from '../utils/array.utils';

export type GridType = (Player | null)[][];

export class Board {
  private readonly _grid: GridType;

  constructor(
    private _columns: number,
    private _rows: number
  ) {
    this._grid = this.initGrid();
  }

  get columnCount(): number {
    return this._columns;
  }

  get rowCount(): number {
    return this._rows;
  }

  get grid(): Readonly<GridType> {
    return this._grid;
  }

  drop(column: number, player: Player): Promise<void | string> {
    return new Promise((resolve, reject) => {
      if (this.isColumnOpen(column)) {
        const row = this.findNextOpenRow(column);
        this._grid[row][column] = player;
        resolve();
      } else {
        reject(`column ${column + 1} is full`);
      }
    })
  }

  /**
   * Reads a board slot assignment with the provided row (y) and column (x).
   *
   * @param column - x coordinate of the slot
   * @param row - y coordinate of the slot
   */
  readSlot(row: number, column: number): Player | null {
    if (row < 0 || row > this._rows) return null;
    if (column < 0 || column > this._columns) return null;
    return this._grid[row][column];
  }

  /**
   * Finds the next open row in a column by find the last row/slot that does not have a player assigned.
   *
   * @param column - to search for an open row/slot
   * @returns the open row/slot index or -1 if the row is not open
   */
  protected findNextOpenRow(column: number): number {
    return findLastIndex(this._grid, (cols) => cols[column] == null);
  }

  /**
   * Create a new grid and fill it with null (unassigned)
   */
  protected initGrid(): GridType {
    return Array(this._rows).fill(null).map(() => Array(this._columns).fill(null));
  }

  /**
   * Determines if the column has an open slot (true), or if its full (false)
   *
   * @param column - to check for an open row/slot
   * @returns true if a row/slot is open, false otherwise
   */
  protected isColumnOpen(column: number): boolean {
    return (column >= 0 && column < this._columns) && (this._grid?.[0]?.[column] == null);
  }
}
