import {Injectable} from '@angular/core';
import {Player} from '../../domain/player';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  private playerOneStore = new Subject<Player>();
  private playerTwoStore = new Subject<Player>();

  playerOne$ = this.playerOneStore.asObservable();
  playerTwo$ = this.playerTwoStore.asObservable();

  assignPlayerOne(player: Player): void {
    this.playerOneStore.next(player);
  }

  assignPlayerTwo(player: Player): void {
    this.playerTwoStore.next(player)
  }
}
