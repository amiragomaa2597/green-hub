import { Component } from '@angular/core';
import { CORE_PILLARS, PROJECT_META } from '../../../../core/content/hero.content';
import { IconComponent, IconName } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly meta = PROJECT_META;
  readonly pillars = CORE_PILLARS;

  iconOf(name?: string): IconName {
    return (name ?? 'leaf') as IconName;
  }
}
