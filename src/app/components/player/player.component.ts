import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

let nextUniqueId = 1;
const colors: string[] = ['bg-gold', 'bg-red', 'bg-blue'];

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  imports: [
    NgClass,
    FormsModule,
    NgIf
  ],
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  isEdit = false;

  private readonly playerId = nextUniqueId++;
  private readonly playerColor: string = colors[(this.playerId + 1) % colors.length];
  private playerName = `Player ${this.playerId}`;

  @ViewChild('nameInput')
  set nameInput(nameInput: ElementRef) {
    if (nameInput) setTimeout(() => nameInput.nativeElement.select())
  };

  get color(): string {
    return this.playerColor;
  }

  get id(): number {
    return this.playerId;
  }

  get name(): string {
    return this.playerName;
  }

  set name(name: string) {
    if (name != null) this.playerName = name;
  }
}
