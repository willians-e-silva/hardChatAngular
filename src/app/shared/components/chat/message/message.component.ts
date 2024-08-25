import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})

export class MessageComponent {
  @Input() name?: string;
  @Input() text?: string;
  @Input() hour?: string;
  @Input() time?: string;
  @Input() type?: string;

}
