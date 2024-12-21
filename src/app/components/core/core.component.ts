import {Component} from '@angular/core';
import {PlayerComponent} from '../player/player.component';
import {Player} from '../../domain/player';
import {BoardComponent} from '../board/board.component';
import {Board} from '../../domain/board';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-core',
  standalone: true,
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss',
  imports: [
    PlayerComponent,
    BoardComponent,
    NgIf
  ]
})
export class CoreComponent {
  // setup all the elements of the game
  playerOne: Player = {id: 'x', name: 'Player 1', color: '#FF0000'};
  playerTwo: Player = {id: 'y', name: 'Player 2', color: '#FFD700'};
  board = new Board(6, 7);
  currentPlayer?: Player;
}
