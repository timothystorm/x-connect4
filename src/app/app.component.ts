import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PlayerComponent} from './components/player/player.component';
import {GameService} from './services/game/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private gameService: GameService
  ) {

  }
}
