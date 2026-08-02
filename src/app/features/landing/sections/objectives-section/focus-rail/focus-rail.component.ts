import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../../shared/components/icon/icon.component';
import { Pillar } from '../../../../../core/models/project.models';

@Component({
  selector: 'app-focus-rail',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './focus-rail.component.html',
  styleUrl: './focus-rail.component.scss',
})
export class FocusRailComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) areas!: Pillar[];

  active = 0;

  select(index: number): void {
    this.active = index;
  }

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
