import {Injectable} from '@angular/core';
import {Player} from '../../domain/player';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  private playerOneStore = new BehaviorSubject<Player | null>(null);
  private playerTwoStore = new BehaviorSubject<Player | null>(null);

  playerOne$ = this.playerOneStore.asObservable();
  playerTwo$ = this.playerTwoStore.asObservable();

  assignPlayerOne(player: Player): void {
    this.playerOneStore.next(player);
  }

  assignPlayerTwo(player: Player): void {
    this.playerTwoStore.next(player)
  }
}
