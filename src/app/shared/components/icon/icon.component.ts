import { Component, Input } from '@angular/core';

export type IconName =
  | 'leaf'
  | 'sun'
  | 'solar'
  | 'cpu'
  | 'users'
  | 'building'
  | 'water'
  | 'chart'
  | 'shield'
  | 'target'
  | 'calendar'
  | 'coins'
  | 'check'
  | 'x'
  | 'grad'
  | 'bolt'
  | 'recycle'
  | 'handshake'
  | 'clock'
  | 'award'
  | 'risk'
  | 'map'
  | 'design'
  | 'person'
  | 'bag'
  | 'download'
  | 'eye'
  | 'file';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size = 22;
}
