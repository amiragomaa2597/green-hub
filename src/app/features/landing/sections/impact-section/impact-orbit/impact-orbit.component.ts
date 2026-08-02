import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../../shared/components/icon/icon.component';
import { ImpactArea } from '../../../../../core/models/project.models';

@Component({
  selector: 'app-impact-orbit',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './impact-orbit.component.html',
  styleUrl: './impact-orbit.component.scss',
})
export class ImpactOrbitComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) highlight!: string;
  @Input({ required: true }) areas!: ImpactArea[];

  active = 0;

  select(index: number): void {
    this.active = index;
  }

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
