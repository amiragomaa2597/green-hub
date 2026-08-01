import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../../shared/directives/reveal-on-scroll.directive';
import { IconComponent, IconName } from '../../../../../shared/components/icon/icon.component';

export interface ObsPeer {
  name: string;
  role: string;
  icon: string;
}

@Component({
  selector: 'app-obs-chart',
  standalone: true,
  imports: [RevealOnScrollDirective, IconComponent],
  templateUrl: './obs-chart.component.html',
  styleUrl: './obs-chart.component.scss',
})
export class ObsChartComponent {
  @Input({ required: true }) badge!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) note!: string;
  @Input({ required: true }) pmRole!: string;
  @Input({ required: true }) pmName!: string;
  @Input({ required: true }) equalLabel!: string;
  @Input({ required: true }) peers!: ObsPeer[];

  iconOf(name?: string): IconName {
    return (name ?? 'person') as IconName;
  }
}
