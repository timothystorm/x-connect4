import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PlayerComponent} from './components/player/player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
