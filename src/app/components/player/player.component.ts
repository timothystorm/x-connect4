import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Player} from '../../domain/player';

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
  isEditName = false;

  @Input() player!: Player;

  @Input() disabled = false;

  @ViewChild('nameInput')
  set nameInput(nameInput: ElementRef) {
    if (nameInput) setTimeout(() => nameInput.nativeElement.select())
  };

  toggleEdit(edit?: boolean): void {
    this.isEditName = (edit ?? !this.isEditName);
  }
}
